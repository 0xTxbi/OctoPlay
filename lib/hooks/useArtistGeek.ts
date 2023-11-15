import { TopTrackCardComponentProps } from "@/components/ui/top-track-card";
import useArtists from "./useArtists";
import useTrack from "./useTrack";
import useTrackFeatures from "./useTrackFeatures";
import { TopArtistCardComponentProps } from "@/components/ui/top-artist-card";
import useArtistAlbums, { ArtistAlbums } from "./useArtistAlbums";
import useArtistTopTracks from "./useArtistTopTracks";
import useArtistRelatedArtists from "./useArtistRelatedArtists";

export interface ArtistGeek extends TopArtistCardComponentProps {}

interface ArtistTopTracks {}

interface ArtistRelatedArtists {}

interface ArtistGeekHookResult {
	error: Error | null;
	loading: boolean;
	artistsGeekInfo: ArtistGeek[] | null;
	artistAlbumsGeekInfo: ArtistAlbums[] | null;
	artistTopTracksGeekInfo: ArtistTopTracks[] | null;
	artistRelatedArtistsGeekInfo: ArtistRelatedArtists[] | null;
}

function useArtistGeek({ id }: { id: string }): ArtistGeekHookResult {
	// fetch artist details
	const { artistsInfo, error, loading } = useArtists({ ids: id });

	// fetch their albums
	const { artistAlbumsInfo } = useArtistAlbums({ id: id });

	// fetch their top tracks
	const { artistTopTracksInfo } = useArtistTopTracks({ id: id });

	// fetch artists related to them
	const { artistRelatedArtistsInfo } = useArtistRelatedArtists({
		id: id,
	});

	// fetch track's audio features
	// const { trackFeaturesInfo } = useTrackFeatures({ id: id });

	// loading and error states
	if (loading) {
		return {
			error: null,
			loading: true,
			artistsGeekInfo: null,
			artistAlbumsGeekInfo: null,
			artistTopTracksGeekInfo: null,
			artistRelatedArtistsGeekInfo: null,
		};
	}

	if (error) {
		return {
			error: error,
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
		artistsGeekInfo: artistsInfo,
		artistAlbumsGeekInfo: artistAlbumsInfo,
		artistTopTracksGeekInfo: artistTopTracksInfo,
		artistRelatedArtistsGeekInfo: artistRelatedArtistsInfo,
	};
}

export default useArtistGeek;
