import React from 'react'
import Container from '@/components/Container'
import Navbar from '@/components/Navbar'
import './globals.css'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                <Container>
                    <Navbar />
                    <main>{children}</main>
                </Container>
            </body>
        </html>
    )
}
