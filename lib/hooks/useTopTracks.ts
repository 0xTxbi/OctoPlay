import useAuthenticatedSWR from "./useAuthenticatedSWR";

type Track = {
	name: string;
};

type TopTracksProps = {
	time_range?: string;
	limit?: number;
};

function useTopTracks({
	time_range = "medium_term",
	limit = 20,
}: TopTracksProps = {}) {
	const { data, error, isLoading } = useAuthenticatedSWR<Track[]>(
		`https://api.spotify.com/v1/me/top/artists?time_range=${time_range}&limit=${limit}`
	);

	console.log(data, error, isLoading);

	// Handle loading and error states
	if (isLoading) {
		return { error: null, loading: true, data: null };
	}

	if (error) {
		return { error, loading: false, data: null };
	}

	// Now you have the user's top tracks data to work with
	return { error: null, loading: false, data };
}

export default useTopTracks;
