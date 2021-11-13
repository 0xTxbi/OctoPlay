import React from 'react'
import ReactDOM from 'react-dom'
import Head from 'next/head'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/client'

export default function Home() {

  const [session, loading] = useSession()

  if (session) {
    return <>

      <Head>
        <title>OctoPlay</title>
        <meta name="description" content="A Simplified Music Analytics Tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div>

        {/* Main content */}
        <main>


          {/* <Avatar src={session.user.picture} size={250} style={{ marginBottom: "2rem" }} draggable="false" alt="User's profile picture" /> */}

          <h1>
            Welcome to <a href="https://github.com/TechieJossy/OctoPlay">OctoPlay</a> 🎧🚀
          </h1>

          <p>
            You've successfully signed in. View your profile as soon as you're ready.
          </p>

          <div>
            <Link href='/profile'>
              <button style={{ marginRight: '1rem' }} type="primary">View Profile
              </button>
            </Link>

            or

            <button onClick={() => signOut()} type="primary" style={{ marginLeft: '1rem' }}>Log out</button>
          </div>
        </main>
        {/* Main content */}

        <footer>
          <a href="https://github.com/TechieJossy">Built with NextJS by TechieJossy</a>
        </footer>
      </div>

    </>
  }
  return <>

    <div>
      <Head>
        <title>OctoPlay</title>
        <meta name="description" content="A Simplified Music Analytics Tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main content */}
      <main>
        <h1>
          This is <a href="https://github.com/TechieJossy/OctoPlay">OctoPlay</a> 🎧🚀
        </h1>

        <p>
          The essential Spotify analytics tool built on it's{' '}
          <a href="https://developer.spotify.com/documentation/web-api/">official API</a>
        </p>

        <div>
          <button onClick={() => signIn('spotify')} type="primary" style={{ marginLeft: '1rem' }}>Get Started</button>
        </div>
      </main>
      {/* Main content */}

      <footer>

        <a href="https://github.com/TechieJossy">Built with NextJS by TechieJossy</a>

      </footer>

    </div>

  </>

}