import { TopTrackCardComponentProps } from "@/components/ui/top-track-card";
import useArtists from "./useArtists";
import useTrack from "./useTrack";
import useTrackFeatures from "./useTrackFeatures";

export interface TrackGeek extends TopTrackCardComponentProps {
	releaseDate: string;
	explicit: boolean;
	image: string;
	// artistName: string;
	// artistImage: string;
}

interface ArtistGeek {
	id: string;
	name: string;
}

interface TrackAudioFeatures {
	id: string;
	name: string;
}

interface TrackGeekHookResult {
	error: Error | null;
	loading: boolean;
	trackGeekInfo: TrackGeek | null;
	artistGeekInfo: ArtistGeek[] | null;
}

function useTrackGeek({ id }: { id: string }): TrackGeekHookResult {
	// fetch track details
	const { trackInfo, error, loading } = useTrack({ id: id });

	// fetch details of involved artists
	// obtain ids
	const artistIds = trackInfo?.artists
		.map((artist) => artist.id)
		.join(",");
	// retrieve artist(s) info
	const { artistsInfo } = useArtists({ ids: artistIds });

	// fetch track's audio features
	// const { trackFeaturesInfo } = useTrackFeatures({ id: id });

	// loading and error states
	if (loading) {
		return {
			error: null,
			loading: true,
			trackGeekInfo: null,
			artistGeekInfo: null,
			// trackAudioFeatures: null,
		};
	}

	if (error) {
		return {
			error: error,
			loading: false,
			trackGeekInfo: null,
			artistGeekInfo: null,
			// trackAudioFeatures: null,
		};
	}

	return {
		error: null,
		loading: false,
		trackGeekInfo: trackInfo,
		artistGeekInfo: artistsInfo,
		// trackAudioFeatures: trackFeaturesInfo,
	};
}

export default useTrackGeek;
