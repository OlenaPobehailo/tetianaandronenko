import type { Metadata } from 'next'
import Head from 'next/head'

export const metadata: Metadata = {
    title: 'Tetiana Andronenko',
    description: 'Tetiana Andronenko',
}

export default function Home() {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                    rel="stylesheet"
                />

                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div>
                <h1>There will be a portfolio site</h1>
            </div>
        </>
    )
}
