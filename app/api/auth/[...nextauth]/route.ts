import { refreshAccessToken } from "@/lib/refreshAccessToken";
import NextAuth, { AuthOptions, NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const authOptions: AuthOptions = {
	providers: [
		SpotifyProvider({
			clientId: process.env.SPOTIFY_CLIENT_ID as string,
			clientSecret: process.env
				.SPOTIFY_CLIENT_SECRET as string,
			authorization: {
				params: {
					scope: "user-read-email user-top-read user-read-private user-library-read user-read-currently-playing",
				},
			},
		}),
	],
	callbacks: {
		async jwt({ token, account, user }) {
			if (account && user) {
				return {
					accessToken: account.access_token,
					refreshToken: account.refresh_token,
					accessTokenExpires:
						account.expires_at * 1000,
					user,
				};
			}
			if (
				token.accessTokenExpires &&
				Date.now() < token.accessTokenExpires
			) {
				return token;
			}
			const newToken = await refreshAccessToken(token);
			return newToken;
		},
		async session({ session, token }) {
			session.accessToken = token.accessToken;
			session.error = token.error;
			session.user = token.user;
			return session;
		},
	},
} satisfies NextAuthOptions;

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
