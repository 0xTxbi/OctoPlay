import React from 'react'
import { useSession, getSession } from 'next-auth/client'
import { Layout, Card, Col, Row } from 'antd'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function YourPlaylists({ data }) {

    const [session, loading] = useSession()
    const { Content } = Layout
    const { Meta } = Card

    return <>

        <Layout style={{ height: '100vh' }}>

            <Header />
            <Content style={{ display: "flex", flexDirection: "column", alignItems: 'center', height: "100%", justifyContent: "center", overflow: "scroll" }}>

                <h1>Recent Playlists</h1>

                <Row gutter={50}>

                    {data.items.map(playlist => (

                        <Col>
                            <Card
                                key={playlist.id}
                                cover={<img src={playlist.images[0].url} style={{ height: 300, width: 300 }} />}
                                style={{ width: 300 }}
                                actions={[<p>Owner: <a href={playlist.owner.external_urls.spotify}><span style={{ fontWeight: 'bold' }}>{playlist.owner.display_name}</span></a></p>]}>

                                <Meta
                                    title={<a href={playlist.external_urls.spotify} target="_blank">{playlist.name}</a>}
                                    style={{ textAlign: 'center' }} />

                                <hr />
                                {playlist.description.length === 0 ? <p>No description provided</p> : <p>{playlist.description}</p>}
                                
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