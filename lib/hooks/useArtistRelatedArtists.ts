import useAuthenticatedSWR from "./useAuthSWR";

export interface ArtistRelatedArtists {
	id: string;
	name: string;
}

interface ArtistRelatedArtistsHookResult {
	error: Error | null;
	artistRelatedArtistsloading: boolean;
	artistRelatedArtistsInfo: ArtistRelatedArtists[] | null;
}

function useArtistRelatedArtists({
	id,
}: {
	id: string;
}): ArtistRelatedArtistsHookResult {
	const url = `https://api.spotify.com/v1/artists/${id}/related-artists`;

	const { data, error, isLoading } = useAuthenticatedSWR<{
		topTracks: ArtistRelatedArtists[];
	}>(url);

	// Loading and error states
	if (isLoading) {
		return {
			error: null,
			artistRelatedArtistsloading: true,
			artistRelatedArtistsInfo: null,
		};
	}

	if (error) {
		return {
			error,
			artistRelatedArtistsloading: false,
			artistRelatedArtistsInfo: null,
		};
	}

	return {
		error: null,
		artistRelatedArtistsloading: false,
		artistRelatedArtistsInfo: data?.artists || null,
	};
}

export default useArtistRelatedArtists;
