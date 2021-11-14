import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import { useSession, getSession } from 'next-auth/client'


export default function Profile({ data }) {


  const [session, loading] = useSession()

  return <>

    <Header />

    <h1>Hi, {data.display_name}</h1>


    <a href={data.uri}>
      <button type="primary" style={{ marginRight: '1rem' }}>Open in App</button>
    </a>
    <Link href="/">
      <button type="primary">Go back</button>
    </Link>


    {/* <Footer /> */}

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