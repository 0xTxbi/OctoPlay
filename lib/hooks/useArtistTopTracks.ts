import useAuthenticatedSWR from "./useAuthSWR";

export interface ArtistTopTracks {
	id: string;
	name: string;
}

interface ArtistTopTracksHookResult {
	error: Error | null;
	artistTopTracksloading: boolean;
	artistTopTracksInfo: ArtistTopTracks[] | null;
}

function useArtistTopTracks({ id }: { id: string }): ArtistTopTracksHookResult {
	const url = `https://api.spotify.com/v1/artists/${id}/top-tracks?market=US`;

	const { data, error, isLoading } = useAuthenticatedSWR<{
		topTracks: ArtistTopTracks[];
	}>(url);

	// Loading and error states
	if (isLoading) {
		return {
			error: null,
			artistTopTracksloading: true,
			artistTopTracksInfo: null,
		};
	}

	if (error) {
		return {
			error,
			artistTopTracksloading: false,
			artistTopTracksInfo: null,
		};
	}

	return {
		error: null,
		artistTopTracksloading: false,
		artistTopTracksInfo: data?.tracks || null,
	};
}

export default useArtistTopTracks;
