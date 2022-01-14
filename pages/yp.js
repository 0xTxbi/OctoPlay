import React from 'react'
import { useSession, getSession } from 'next-auth/react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function YourPlaylists({ data }) {

    const [session, loading] = useSession()
    console.log(data)

    return <>

        <Header />

        <h1>Recent Playlists of {session.user.name} </h1>

    </>
}

export async function getServerSideProps(ctx) {

    const session = await getSession(ctx)

    const userId = session.user.id
    const limit = 5
    const res = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists?limit=${limit}`, {
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