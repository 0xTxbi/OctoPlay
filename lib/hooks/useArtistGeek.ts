import useArtists, { Artist } from "./useArtists";
import { TopArtistCardComponentProps } from "@/components/ui/top-artist-card";
import useArtistAlbums, { ArtistAlbums } from "./useArtistAlbums";
import useArtistTopTracks from "./useArtistTopTracks";
import useArtistRelatedArtists from "./useArtistRelatedArtists";

export interface ArtistGeek extends TopArtistCardComponentProps {
	uri: string;
	albums: [];
	relatedArtists: [];
}

interface ArtistTopTracks {}

interface ArtistRelatedArtists {}

interface ArtistGeekHookResult {
	error: Error | null;
	loading: boolean;
	artistsGeekInfo: ArtistGeek | Artist | null;
	artistAlbumsGeekInfo: ArtistAlbums | null;
	artistTopTracksGeekInfo: ArtistTopTracks[] | null;
	artistRelatedArtistsGeekInfo: ArtistRelatedArtists[] | null;
}

function useArtistGeek({ id }: { id: string }): ArtistGeekHookResult {
	// fetch artist details
	const {
		artistsInfo,
		error: artistError,
		artistloading,
	} = useArtists({ ids: id });

	// fetch their albums
	const {
		artistAlbumsInfo,
		error: albumError,
		artistAlbumloading,
	} = useArtistAlbums({ id: id });

	// fetch their top tracks
	const {
		artistTopTracksInfo,
		error: topTracksError,
		artistTopTracksloading,
	} = useArtistTopTracks({ id: id });

	// fetch artists related to them
	const {
		artistRelatedArtistsInfo,
		error: relatedArtistsError,
		artistRelatedArtistsloading,
	} = useArtistRelatedArtists({
		id: id,
	});

	// Check if all sub-hooks have resolved
	const allSubHooksResolved =
		!artistloading &&
		!albumError &&
		!artistAlbumloading &&
		!topTracksError &&
		!artistTopTracksloading &&
		!relatedArtistsError &&
		!artistRelatedArtistsloading;

	// loading and error states
	if (!allSubHooksResolved) {
		return {
			error: null,
			loading: true,
			artistsGeekInfo: null,
			artistAlbumsGeekInfo: null,
			artistTopTracksGeekInfo: null,
			artistRelatedArtistsGeekInfo: null,
		};
	}

	if (
		artistError ||
		albumError ||
		topTracksError ||
		relatedArtistsError
	) {
		return {
			error:
				artistError ||
				albumError ||
				topTracksError ||
				relatedArtistsError,
			loading: false,
			artistsGeekInfo: null,
			artistAlbumsGeekInfo: null,
			artistTopTracksGeekInfo: null,
			artistRelatedArtistsGeekInfo: null,
		};
	}

	return {
		error: null,
		loading: false,
		artistsGeekInfo: artistsInfo[0],
		artistAlbumsGeekInfo: artistAlbumsInfo,
		artistTopTracksGeekInfo: artistTopTracksInfo,
		artistRelatedArtistsGeekInfo: artistRelatedArtistsInfo,
	};
}

export default useArtistGeek;
