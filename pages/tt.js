import React from 'react'
import { useSession, getSession } from 'next-auth/client'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function topTracks({ data }) {

    console.log(data)

    return <>

        <Header />

        <h1>Top Tracks</h1>

    </>
}

export async function getServerSideProps(ctx) {

    const session = await getSession(ctx)

    const type = 'tracks'
    const limit = 5
    const range = 'short_term'
    const res = await fetch(`https://api.spotify.com/v1/me/top/${type}?time_range=${range}&limit=${limit}`, {
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