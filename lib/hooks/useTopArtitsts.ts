import useArtists from "./useArtists";
import useAuthenticatedSWR from "./useAuthSWR";

type Artist = {
	name: string;
};

type TopArtistsProps = {
	time_range?: string;
	limit?: number;
};

function useTopArtists({
	time_range = "short_term",
	limit = 10,
}: TopArtistsProps = {}) {
	const { data, error, isLoading } = useAuthenticatedSWR<Artist[]>(
		`https://api.spotify.com/v1/me/top/artists?time_range=${time_range}&limit=${limit}`
	);

	const artistsIds = data?.items?.map((artist) => artist.id).join(",");

	const { artistsInfo } = useArtists({ ids: artistsIds });

	// handle loading and error states
	if (isLoading) {
		return { error: null, loading: true, data: null };
	}

	if (error) {
		return { error, loading: false, data: null };
	}

	return { error: null, loading: false, topArtists: artistsInfo };
}

export default useTopArtists;
