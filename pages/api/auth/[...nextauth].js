import moment from "moment";
import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

// Spotify permission scopes
const scopes =
  "user-top-read user-library-read user-read-email user-read-private";

async function refreshAccessToken(token) {
  try {
    const url = "https://accounts.spotify.com/api/token";
    const concatenatedString = `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Basic ${btoa(concatenatedString)}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      form: {
        grant_type: "refresh_token",
        refresh_token: token?.refreshToken,
      },
      method: "POST",
    });

    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_at * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
    };
  } catch (error) {
    console.log(error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export default NextAuth({
  providers: [
    SpotifyProvider({
      authorization: `https://accounts.spotify.com/authorize?scope=${scopes}`,
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    }),
  ],
  session: {
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.id = account?.id;
        token.accessToken = account?.access_token;
        token.accessTokenExpires = Date.now() + account?.expires_at * 1000;
        token.refreshToken = account?.refresh_token;
      }

      // Return previous token if the access token has not expired yet
      if (Date.now() < token.accessTokenExpires) {
        return token;
      }

      // Access token has expired, try to update it
      return refreshAccessToken(token);
    },

    async session({ session, token }) {
      session.accessToken = token?.accessToken;
      session.refreshToken = token?.refreshToken;
      session.error = token?.error;
      return session;
    },
  },

  secret: "SJw8BB1k2ovfPN1YG1izI6oECDwhs7w9JvMEE/yPJgw=",
});
