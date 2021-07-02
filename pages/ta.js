import React from 'react'
import { useSession, getSession } from 'next-auth/client'
import { Layout, Card, Col, Row } from 'antd'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Meta } from 'antd/lib/list/Item'

export default function topArtists({ data }) {

    const [session, loading] = useSession()
    const { Content } = Layout

    return <>

        <Layout style={{ height: '100vh' }}>
            <Header />

            {console.log(data)}
            <Content style={{ display: "flex", flexDirection: "column", alignItems: 'center', height: "100%", justifyContent: "center", overflow: "scroll" }}>

                <h1>Your Top Artists</h1>

                    <Row gutter={50}>

                        {data.items.map(artist => (

                            <Col>
                                <Card
                                    key={artist.id}
                                    cover={<img alt={`${artist.name}'s picture`} src={artist.images[0].url} style={{ height: 300, width: 300 }} />}
                                    style={{ width: 300 }}
                                    actions={[artist.genres[0]]}>

                                    <Meta
                                        title={<a href={artist.external_urls.spotify} target="_blank">{artist.name}</a>} style={{ textAlign: 'center' }} />
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

    const limit = 5
    const range = 'short_term'
    const res = await fetch(`https://api.spotify.com/v1/me/top/artists?time_range=${range}&limit=${limit}`, {
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