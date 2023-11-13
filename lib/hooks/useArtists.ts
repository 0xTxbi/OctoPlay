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
	const url = `https://api.spotify.com/v1/artists?ids=${ids}`;

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
