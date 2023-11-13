import useAuthenticatedSWR from "./useAuthSWR";

interface Track {
	id: string;
	name: string;
}

interface TrackHookResult {
	error: Error | null;
	loading: boolean;
	trackInfo: Track | null;
}

function useTrack({ id }: { id: string }): TrackHookResult {
	const { data, error, isLoading } = useAuthenticatedSWR<Track>(
		`https://api.spotify.com/v1/tracks/${id}`
	);

	console.log(data, error, isLoading);

	// loading and error states
	if (isLoading) {
		return { error: null, loading: true, trackInfo: null };
	}

	if (error) {
		return { error, loading: false, trackInfo: null };
	}

	return { error: null, loading: false, trackInfo: data };
}

export default useTrack;
