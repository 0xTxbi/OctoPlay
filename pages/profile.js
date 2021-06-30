import Link from 'next/link'
import { useSession, getSession } from 'next-auth/client'

export default function Profile({ data }) {

  const [session, loading] = useSession()

  return <>
  {console.log(data)}
    <h1>Hey {session.user.name}</h1>
    <p>Your username is {data.display_name}</p>
    <Link href="/">
      <button>Go back</button>
    </Link>
  </>

}

export async function getServerSideProps(ctx) {

  const session = await getSession(ctx)
  const res = await fetch('https://api.spotify.com/v1/me', {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${session.user.accessToken}`,
      "Content-Type": "application/json"
    }

  })
  const data = await res.json()

  return {
    props: {
      data,
      session
    }
  }

}