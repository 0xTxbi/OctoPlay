import NextAuth, { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

export const authOptions = {
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
					user,
				};
			}

			return token;
		},
		async session({ session, token, user }) {
			session.accessToken = token.accessToken;
			session.user = token.user;
			return session;
		},
	},
} satisfies NextAuthOptions;

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
