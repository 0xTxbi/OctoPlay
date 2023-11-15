import useAuthenticatedSWR from "./useAuthSWR";

interface Artist {
	artistId: string;
	name: string;
	image: string;
	followers: number;
	genres: string[];
	popularity: string;
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
