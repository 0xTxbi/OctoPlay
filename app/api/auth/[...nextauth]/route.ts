import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { JWT } from "next-auth/jwt";
import { User, Account, Session as NextAuthSession } from "next-auth";

interface IToken extends JWT {
	accessToken?: string;
}

interface Session extends NextAuthSession {
	accessToken?: string;
}

const handler = NextAuth({
	providers: [
		SpotifyProvider({
			clientId: process.env.SPOTIFY_CLIENT_ID as string,
			clientSecret: process.env
				.SPOTIFY_CLIENT_SECRET as string,
		}),
	],
	callbacks: {
		async jwt(token: IToken, user: any, account: any) {
			if (account) {
				token.accessToken = account.accessToken;
			}
			return token;
		},
		async session(session: Session, token: IToken, user: User) {
			session.accessToken = token.accessToken;
			return session;
		},
	},
});

export { handler as GET, handler as POST };
