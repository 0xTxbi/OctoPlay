import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

// Spotify User scopes
const scopes = "user-read-recently-played user-top-read user-read-playback-position user-read-playback-state user-modify-playback-state user-read-currently-playing app-remote-control streaming playlist-modify-public playlist-modify-private playlist-read-private playlist-read-collaborative user-follow-modify user-follow-read user-library-modify user-library-read user-read-email user-read-private"

export default NextAuth({

  providers: [

    Providers.Spotify({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      scope: scopes
    })

  ],
  callbacks: {
    async jwt(token, _, account) {

      if (account) {
        token.id = account.id
        token.accessToken = account.accessToken
      }
      return token
    },
    async session(session, user) {
      session.user = user
      return session
    }
  }

})