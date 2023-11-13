import useAuthenticatedSWR from "./useAuthSWR";

interface Artist {
	id: string;
	name: string;
}

interface ArtistHookResult {
	error: Error | null;
	loading: boolean;
	artistsInfo: Artist[] | null;
}

function useArtists({ ids }: { ids: string }): ArtistHookResult {
	const idArray = ids.split(",").map((id) => id.trim());
	const isSingleId = idArray.length === 1;

	const url = isSingleId
		? `https://api.spotify.com/v1/artists/${encodeURIComponent(
				ids
		  )}`
		: `https://api.spotify.com/v1/artists?ids=${encodeURIComponent(
				ids
		  )}`;

	const { data, error, isLoading } = useAuthenticatedSWR<{
		artists: Artist[];
	}>(url);

	console.log(data, error, isLoading);

	// Loading and error states
	if (isLoading) {
		return { error: null, loading: true, artistsInfo: null };
	}

	if (error) {
		return { error, loading: false, artistsInfo: null };
	}

	return {
		error: null,
		loading: false,
		artistsInfo: data?.artists || null,
	};
}

export default useArtists;
