import useAuthenticatedSWR from "./useAuthSWR";
import useTracks from "./useTracks";

type Track = {
	name: string;
};

type TopTracksProps = {
	time_range?: string;
	limit?: number;
};

function useTopTracks({
	time_range = "short_term",
	limit = 10,
}: TopTracksProps = {}) {
	const { data, error, isLoading } = useAuthenticatedSWR<Track[]>(
		`https://api.spotify.com/v1/me/top/tracks?time_range=${time_range}&limit=${limit}`
	);

	const trackIds = data?.items?.map((track) => track.id).join(",");

	// console.log(trackIds);

	const { tracksInfo } = useTracks({ ids: trackIds });
	console.log(tracksInfo);
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
