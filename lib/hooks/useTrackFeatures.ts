import useAuthenticatedSWR from "./useAuthSWR";

export interface TrackAudioFeatures {
	id: string;
	danceability: number;
	tempo: number;
	liveness: number;
	acousticness: number;
	energy: number;
}
interface TrackFeaturesHookResult {
	error: Error | null;
	loading: boolean;
	trackFeaturesInfo: TrackAudioFeatures | null;
}

function useTrackFeatures({ id }: { id: string }): TrackFeaturesHookResult {
	const { data, error, isLoading } =
		useAuthenticatedSWR<TrackAudioFeatures>(
			`https://api.spotify.com/v1/audio-features/${id}`
		);

	// loading and error states
	if (isLoading) {
		return { error: null, loading: true, trackFeaturesInfo: null };
	}

	if (error) {
		return { error, loading: false, trackFeaturesInfo: null };
	}

	return { error: null, loading: false, trackFeaturesInfo: data };
}

export default useTrackFeatures;
