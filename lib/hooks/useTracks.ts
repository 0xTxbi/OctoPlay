import useAuthenticatedSWR from "./useAuthSWR";

interface Track {
	id: string;
	name: string;
}

interface TrackHookResult {
	error: Error | null;
	loading: boolean;
	tracksInfo: Track[] | null;
}

function useTracks({ ids }: { ids: string }): TrackHookResult {
	const url = `https://api.spotify.com/v1/tracks?ids=${ids}`;

	const { data, error, isLoading } = useAuthenticatedSWR<{
		tracks: Track[];
	}>(url);

	// Loading and error states
	if (isLoading) {
		return { error: null, loading: true, tracksInfo: null };
	}

	if (error) {
		return { error, loading: false, tracksInfo: null };
	}

	return {
		error: null,
		loading: false,
		tracksInfo: data?.tracks || null,
	};
}

export default useTracks;
