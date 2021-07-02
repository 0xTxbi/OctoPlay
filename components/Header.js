import React from 'react'
import { Layout, Button, Menu, Avatar } from 'antd'
import Link from 'next/link'
import { useSession } from 'next-auth/client'
import 'antd/dist/antd.css';
import styles from '../styles/Profile.module.css'

const Header = () => {

    const [session, loading] = useSession()
    // Layout components
    const { Header } = Layout

    return <>

        <Header style={{ display: "flex", justifyContent: "space-between" }}>
            <Link href="/">
            <div className={styles.logo}>OctoPlay</div>
            </Link>
            {/* <img src={`https://www.countryflags.io/${data.country}/shiny/64.png`} /> */}
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key={session.user.id}>
                    <Avatar src={session.user.picture} style={{ marginRight: "0.5rem" }} draggable="false" alt="User's profile picture" />
                    {session.user.name}
                </Menu.Item>
            </Menu>
        </Header>

    </>
}

export default Header


export async function getServerSideProps(ctx) {

    const session = await getSession(ctx)
  
  }