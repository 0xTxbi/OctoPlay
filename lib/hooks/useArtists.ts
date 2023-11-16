import useAuthenticatedSWR from "./useAuthSWR";

export interface Artist {
	artistId: string;
	name: string;
	image: string;
	followers: number;
	genres: string[];
	popularity: string;
}

interface ArtistHookResult {
	error: Error | null;
	artistloading: boolean;
	artistsInfo: Artist[] | null;
}

function useArtists({ ids }: { ids: string }): ArtistHookResult {
	const url = `https://api.spotify.com/v1/artists?ids=${ids}`;

	const { data, error, isLoading } = useAuthenticatedSWR<{
		artists: Artist[];
	}>(url);

	// Loading and error states
	if (isLoading) {
		return { error: null, artistloading: true, artistsInfo: null };
	}

	if (error) {
		return { error, artistloading: false, artistsInfo: null };
	}

	return {
		error: null,
		artistloading: false,
		artistsInfo: data?.artists || null,
	};
}

export default useArtists;
