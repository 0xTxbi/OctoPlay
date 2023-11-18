import useAuthenticatedSWR from "./useAuthSWR";

interface User {
	country: string;
	display_name: string;
	email: string;
	explicit_content: {
		filter_enabled: boolean;
		filter_locked: boolean;
	};
	external_urls: {
		spotify: string;
	};
	followers: {
		href: string;
		total: number;
	};
	href: string;
	id: string;
	images: {
		url: string;
		height: number;
		width: number;
	}[];
	product: string;
	type: string;
	uri: string;
}

function useCurrentUser() {
	const { data, error, isLoading } = useAuthenticatedSWR<User>(
		`https://api.spotify.com/v1/me`
	);

	// handle loading and error states
	if (isLoading) {
		return { error: null, loading: true, data: null };
	}

	if (error) {
		return { error, loading: false, data: null };
	}

	return { error: null, loading: false, userInfo: data };
}

export default useCurrentUser;
