import useAuthenticatedSWR from "./useAuthSWR";

export interface ArtistTopTracks {
	id: string;
	name: string;
}

interface ArtistTopTracksHookResult {
	error: Error | null;
	loading: boolean;
	artistTopTracksInfo: ArtistTopTracks[] | null;
}

function useArtistTopTracks({ id }: { id: string }): ArtistTopTracksHookResult {
	const url = `https://api.spotify.com/v1/artists/${id}/top-tracks`;

	const { data, error, isLoading } = useAuthenticatedSWR<{
		topTracks: ArtistTopTracks[];
	}>(url);

	console.log(data);

	// Loading and error states
	if (isLoading) {
		return {
			error: null,
			loading: true,
			artistTopTracksInfo: null,
		};
	}

	if (error) {
		return { error, loading: false, artistTopTracksInfo: null };
	}

	return {
		error: null,
		loading: false,
		artistTopTracksInfo: data?.tracks || null,
	};
}

export default useArtistTopTracks;
