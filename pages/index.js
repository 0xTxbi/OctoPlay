import Head from 'next/head'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/client'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [session, loading] = useSession()

  if (session) {
    return <>

      <div className={styles.container}>
        {/* Main content */}
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://github.com/TechieJossy/OctoPlay">OctoPlay</a> 🎧🚀
          </h1>

          <p className={styles.description}>
            You've successfully signed in. View your profile as soon as you're ready.
          </p>

          <div className={styles.grid}>
            <Link href='/profile'>
              <a className={styles.btn} style={{ marginRight: '1rem' }}>View Profile</a>
            </Link>

            or

            <button onClick={() => signOut()} className={styles.btn} style={{ marginLeft: '1rem' }}>Log out</button>
          </div>
        </main>
        {/* Main content */}

        <footer className={styles.footer}>
          <a href="https://github.com/TechieJossy">Built with NextJS by TechieJossy</a>
        </footer>
      </div>

    </>
  }
  return <>

    <div className={styles.container}>
      <Head>
        <title>OctoPlay</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main content */}
      <main className={styles.main}>
        <h1 className={styles.title}>
          This is <a href="https://github.com/TechieJossy/OctoPlay">OctoPlay</a> 🎧🚀
        </h1>

        <p className={styles.description}>
          The essential Spotify analytics tool built on it's{' '}
          <a href="https://developer.spotify.com/documentation/web-api/">official API</a>
        </p>

        <div className={styles.grid}>
          <button onClick={() => signIn("spotify")} className={styles.btn}>Get Started</button>
        </div>
      </main>
      {/* Main content */}

      <footer className={styles.footer}>

        <a href="https://github.com/TechieJossy">Built with NextJS by TechieJossy</a>

      </footer>
    </div>

  </>

}