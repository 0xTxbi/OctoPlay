import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useSession, getSession } from 'next-auth/client'

export default function followingArtists({ data }) {

    console.log(data)

    const [session, loading] = useSession()

    return <>


        <Header />


        <h1>Artists You Follow</h1>

        {/* {data.artists.items.map(artist => (

                    <Card
                        key={artist.id}
                        cover={<img src={artist.images[0].url} style={{ height: 300, width: 300 }} />}
                        style={{ width: 300 }}
                        actions={[<p>Genre: <span style={{ fontWeight: 'bold' }}>{artist.genres[0]}</span></p>]}>

                        <Meta
                            title={<a href={artist.uri} target="_blank">{artist.name}</a>}
                            style={{ textAlign: 'center' }} />

            ))} */}


    </>
}

export async function getServerSideProps(ctx) {

    const session = await getSession(ctx)
    const type = 'artist'
    const limit = 50
    const res = await fetch(`https://api.spotify.com/v1/me/following?type=${type}&limit=${limit}`, {
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