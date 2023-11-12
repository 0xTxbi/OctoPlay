type AccessTokenResponse = {
	accessToken: string;
	error?: {
		message: string;
	};
};

const getAccessToken = async (): Promise<string> => {
	const response = await fetch("/api/auth/session");
	const data: AccessTokenResponse = await response.json();

	if (!response.ok) {
		throw new Error(
			data.error?.message || "Failed to fetch access token"
		);
	}

	return data.accessToken;
};

export default getAccessToken;
