import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

// Spotify permission scopes
const scopes =
  "user-read-recently-played user-top-read user-read-playback-position user-read-playback-state user-modify-playback-state user-read-currently-playing app-remote-control streaming playlist-modify-public playlist-modify-private playlist-read-private playlist-read-collaborative user-follow-modify user-follow-read user-library-modify user-library-read user-read-email user-read-private";

export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      scope: scopes,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.id = account?.id;
        token.accessToken = account?.access_token;
      }
      return token;
    },

    async session({ session, token }) {
      session.accessToken = token?.accessToken;
      return session;
    },
  },

  secret: "SJw8BB1k2ovfPN1YG1izI6oECDwhs7w9JvMEE/yPJgw=",
});
