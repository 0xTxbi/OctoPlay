import { JWT } from "next-auth/jwt";

export async function refreshAccessToken(token: JWT): Promise<JWT> {
	try {
		const basicAuth = Buffer.from(
			`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
		).toString("base64");

		const refreshTokenUrl = process.env.SPOTIFY_REFRESH_TOKEN_URL;

		if (!refreshTokenUrl) {
			throw new Error(
				"SPOTIFY_REFRESH_TOKEN_URL is not defined"
			);
		}

		const bodyParams = new URLSearchParams({
			grant_type: "refresh_token",
			refresh_token: token.refreshToken || "",
		});

		const response = await fetch(refreshTokenUrl, {
			method: "POST",
			headers: {
				Authorization: `Basic ${basicAuth}`,
				"Content-Type":
					"application/x-www-form-urlencoded",
			},
			body: bodyParams.toString(),
		});

		if (!response.ok) {
			throw new Error("Failed to refresh access token");
		}

		const data = await response.json();

		return {
			...token,
			accessToken: data.access_token,
			accessTokenExpires: Date.now() + data.expires_in * 1000,
		};
	} catch (error) {
		return {
			...token,
			error: "RefreshAccessTokenError",
		};
	}
}
