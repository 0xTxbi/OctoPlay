import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Layout, Button, Menu, Avatar, Row, Col } from 'antd'
import Link from 'next/link'
import { useSession, getSession } from 'next-auth/client'
import 'antd/dist/antd.css';
import styles from '../styles/Profile.module.css'

export default function Profile({ data }) {

  // Layout components
  const { Content } = Layout

  const [session, loading] = useSession()
  console.log(data)

  return <>

    <Layout style={{ height: "100vh" }}>

      <Header />

      <Content style={{ display: "flex", flexDirection: "column", alignItems: 'center', height: "100%", justifyContent: "center" }}>
        <h1>Hi, {data.display_name} <img src={`https://www.countryflags.io/${data.country}/flat/32.png`} /></h1>

        <Row>
          <a href={data.uri}>
            <Button type="primary" style={{marginRight: '1rem'}}>Open in App</Button>
          </a>
          <Link href="/">
            <Button type="primary">Go back</Button>
          </Link>
        </Row>

      </Content>

      <Footer />

    </Layout>

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