import useAuthenticatedSWR from "./useAuthSWR";

export interface ArtistRelatedArtists {
	id: string;
	name: string;
}

interface ArtistRelatedArtistsHookResult {
	error: Error | null;
	loading: boolean;
	artistRelatedArtistsInfo: ArtistRelatedArtists[] | null;
}

function useArtistRelatedArtists({
	id,
}: {
	id: string;
}): ArtistRelatedArtistsHookResult {
	const url = `https://api.spotify.com/v1/artists/${id}/top-tracks`;

	const { data, error, isLoading } = useAuthenticatedSWR<{
		topTracks: ArtistRelatedArtists[];
	}>(url);

	console.log(data);

	// Loading and error states
	if (isLoading) {
		return {
			error: null,
			loading: true,
			artistRelatedArtistsInfo: null,
		};
	}

	if (error) {
		return {
			error,
			loading: false,
			artistRelatedArtistsInfo: null,
		};
	}

	return {
		error: null,
		loading: false,
		artistRelatedArtistsInfo: data?.artists || null,
	};
}

export default useArtistRelatedArtists;
