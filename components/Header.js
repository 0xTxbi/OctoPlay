import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/client'

const Header = () => {

    const [session, loading] = useSession()


    return <>

        <nav>
            <ul>
                <li>Home</li>
            </ul>
        </nav>

    </>
}

export default Header


export async function getServerSideProps(ctx) {

    const session = await getSession(ctx)

    return {
        session
    }

}