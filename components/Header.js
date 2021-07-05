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
                <div className={styles.logo} style={{ cursor: 'pointer' }}>OctoPlay</div>
            </Link>
            {/* <img src={`https://www.countryflags.io/${data.country}/shiny/64.png`} /> */}
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key='1'>
                    <Link href='/ta'>
                        Top Artists
                    </Link>
                </Menu.Item>
                <Menu.Item key='2'>
                    <Link href='/tt'>
                        Top Tracks
                    </Link>
                </Menu.Item>
                <Menu.Item key='3'>
                    <Link href='/yp'>
                        Recent Playlists
                    </Link>
                </Menu.Item>
                <Menu.Item key='4'>
                    <Link href='/fa'>
                        Artists You Follow
                    </Link>
                </Menu.Item>
                <Menu.Item key='5'>
                    <Link href='/profile'>
                        <Avatar src={session.user.picture} style={{ marginRight: "0.5rem" }} draggable="false" alt="User's profile picture" />
                    </Link>
                </Menu.Item>
            </Menu>
        </Header>

    </>
}

export default Header


export async function getServerSideProps(ctx) {

    const session = await getSession(ctx)

    return {
        session
    }

}