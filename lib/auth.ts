import {
	GetServerSidePropsContext,
	NextApiRequest,
	NextApiResponse,
} from "next";
import { NextAuthOptions, getServerSession } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

export const config = {
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
} satisfies NextAuthOptions;

export function auth(
	...args:
		| [
				GetServerSidePropsContext["req"],
				GetServerSidePropsContext["res"]
		  ]
		| [NextApiRequest, NextApiResponse]
		| []
) {
	return getServerSession(...args, config);
}
