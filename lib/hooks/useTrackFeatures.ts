import useAuthenticatedSWR from "./useAuthSWR";

interface TrackFeatures {
	id: string;
	name: string;
}

interface TrackFeaturesHookResult {
	error: Error | null;
	loading: boolean;
	trackFeaturesInfo: TrackFeatures | null;
}

function useTrackFeatures({ id }: { id: string }): TrackFeaturesHookResult {
	const { data, error, isLoading } = useAuthenticatedSWR<TrackFeatures>(
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
