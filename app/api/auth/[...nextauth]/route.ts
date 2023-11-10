import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { JWT } from "next-auth/jwt";

const handler = NextAuth({
	providers: [
		SpotifyProvider({
			clientId: process.env.SPOTIFY_CLIENT_ID as string,
			clientSecret: process.env
				.SPOTIFY_CLIENT_SECRET as string,
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
});

export { handler as GET, handler as POST };
