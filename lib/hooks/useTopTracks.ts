import useAuthenticatedSWR from "./useAuthSWR";

type Track = {
	name: string;
};

type TopTracksProps = {
	time_range?: string;
	limit?: number;
};

function useTopTracks({
	time_range = "medium_term",
	limit = 10,
}: TopTracksProps = {}) {
	const { data, error, isLoading } = useAuthenticatedSWR<Track[]>(
		`https://api.spotify.com/v1/me/top/tracks?time_range=${time_range}&limit=${limit}`
	);

	// handle loading and error states
	if (isLoading) {
		return { error: null, loading: true, data: null };
	}

	if (error) {
		return { error, loading: false, data: null };
	}

	return { error: null, loading: false, topTracks: data?.items };
}

export default useTopTracks;
