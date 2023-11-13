import useArtists from "./useArtists";
import useAuthenticatedSWR from "./useAuthSWR";

interface TrackGeek {
	id: string;
	name: string;
}

interface ArtistGeek {
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
	const { data, error, isLoading } = useAuthenticatedSWR<TrackGeek>(
		`https://api.spotify.com/v1/tracks/${id}`
	);

	console.log(data, error, isLoading);

	// fetch details of involved artists
	// obtain ids
	const artistIds = data?.artists.map((artist) => artist.id).join(",");
	// retrieve artist(s) info
	const { artistsInfo } = useArtists({ ids: artistIds });

	// loading and error states
	if (isLoading) {
		return {
			error: null,
			loading: true,
			trackGeekInfo: null,
			artistGeekInfo: null,
		};
	}

	if (error) {
		return {
			error: error,
			loading: false,
			trackGeekInfo: null,
			artistGeekInfo: null,
		};
	}

	return {
		error: null,
		loading: false,
		trackGeekInfo: data,
		artistGeekInfo: artistsInfo,
	};
}

export default useTrackGeek;
