import useAuthenticatedSWR from "./useAuthSWR";
import useCurrentUser from "./useCurrentuser";

interface Playlist {
	href: string;
	limit: number;
	next: string | null;
	offset: number;
	previous: string | null;
	total: number;
	items: PlaylistItem[];
}

interface PlaylistItem {
	collaborative: boolean;
	description: string;
	external_urls: {
		spotify: string;
	};
	href: string;
	id: string;
	images: PlaylistImage[];
	name: string;
	owner: {
		external_urls: {
			spotify: string;
		};
		followers: {
			href: string | null;
			total: number;
		};
		href: string;
		id: string;
		type: string;
		uri: string;
		display_name: string;
	};
	public: boolean;
	snapshot_id: string;
	tracks: {
		href: string;
		total: number;
	};
	type: string;
	uri: string;
}

interface PlaylistImage {
	url: string;
	height: number;
	width: number;
}

interface PlaylistHookResult {
	error: Error | null;
	playlistsLoading: boolean;
	playlistsInfo: PlaylistItem[] | null;
}

function usePlaylists(): PlaylistHookResult {
	const { data, error, isLoading } = useAuthenticatedSWR<{
		items: PlaylistItem[];
	}>(`https://api.spotify.com/v1/me/playlists`);

	// Loading and error states
	if (isLoading) {
		return {
			error: null,
			playlistsLoading: true,
			playlistsInfo: null,
		};
	}

	if (error) {
		return { error, playlistsLoading: false, playlistsInfo: null };
	}

	return {
		error: null,
		playlistsLoading: false,
		playlistsInfo: data?.items || null,
	};
}

export default usePlaylists;
