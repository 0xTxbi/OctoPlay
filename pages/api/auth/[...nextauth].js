import dotenv from 'dotenv'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

dotenv.config()

export default NextAuth({

  providers: [

    Providers.Spotify({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET
    })

  ]

})