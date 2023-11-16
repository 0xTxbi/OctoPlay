import useAuthenticatedSWR from "./useAuthSWR";

export interface ArtistAlbums {
	id: string;
	name: string;
	artwork: string;
	releaseDate: string;
}

interface ArtistAlbumHookResult {
	error: Error | null;
	artistAlbumloading: boolean;
	artistAlbumsInfo: ArtistAlbums[] | null;
}

function useArtistAlbums({ id }: { id: string }): ArtistAlbumHookResult {
	const url = `https://api.spotify.com/v1/artists/${id}/albums?include_groups=album`;

	const { data, error, isLoading } = useAuthenticatedSWR<{
		albums: ArtistAlbums[];
	}>(url);

	// Loading and error states
	if (isLoading) {
		return {
			error: null,
			artistAlbumloading: true,
			artistAlbumsInfo: null,
		};
	}

	if (error) {
		return {
			error,
			artistAlbumloading: false,
			artistAlbumsInfo: null,
		};
	}

	return {
		error: null,
		artistAlbumloading: false,
		artistAlbumsInfo: data?.items || null,
	};
}

export default useArtistAlbums;
