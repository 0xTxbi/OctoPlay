import useAuthenticatedSWR from "./useAuthSWR";

export interface ArtistAlbums {
	id: string;
	name: string;
	artwork: string;
	releaseDate: string;
}

interface ArtistAlbumHookResult {
	error: Error | null;
	loading: boolean;
	artistAlbumsInfo: ArtistAlbums[] | null;
}

function useArtistAlbums({ id }: { id: string }): ArtistAlbumHookResult {
	const url = `https://api.spotify.com/v1/artists/${id}/albums?include_groups=album&limit=5`;

	const { data, error, isLoading } = useAuthenticatedSWR<{
		albums: ArtistAlbums[];
	}>(url);

	console.log(data);

	// Loading and error states
	if (isLoading) {
		return { error: null, loading: true, artistAlbumsInfo: null };
	}

	if (error) {
		return { error, loading: false, artistAlbumsInfo: null };
	}

	return {
		error: null,
		loading: false,
		artistAlbumsInfo: data?.albums || null,
	};
}

export default useArtistAlbums;
