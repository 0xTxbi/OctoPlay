import React from 'react'
import { useSession, getSession } from 'next-auth/client'
import { Layout, Card, Col, Row } from 'antd'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Meta } from 'antd/lib/list/Item'

export default function topTracks({ data }) {

    const { Content } = Layout
    const favTracks = data.items
    const favTracksClean = favTracks.map(track => {
        console.log(track.name, track.album.name)
    })
    { console.log(favTracks) }

    return <>

        <Layout style={{ height: '100vh' }}>

            <Header />
            <Content style={{ display: "flex", flexDirection: "column", alignItems: 'center', height: "100%", justifyContent: "center", overflow: "scroll" }}>

                <h1>Top Tracks</h1>

                <Row gutter={50}>

                    {data.items.map(track => (

                        <Col>
                            <Card
                                key={track.id}
                                cover={<img alt={`${track.name}'s picture`} src={track.album.images[0].url} style={{ height: 300, width: 300 }} />}
                                style={{ width: 300 }}
                                actions={[<p style={{ fontWeight: 'bold' }}><a href={track.album.external_urls.spotify} target="_blank">{track.album.name}</a></p>]}>

                                <Meta
                                    title={<a href={track.external_urls.spotify} target="_blank">{track.name}</a>} style={{ textAlign: 'center' }} />
                            </Card>
                        </Col>

                    ))}

                </Row>

            </Content>
            <Footer />

        </Layout>

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