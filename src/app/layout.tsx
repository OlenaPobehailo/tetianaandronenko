import React from 'react'
import './globals.css'
import Container from '@/components/Container'
import Navbar from '@/components/Navbar'

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
