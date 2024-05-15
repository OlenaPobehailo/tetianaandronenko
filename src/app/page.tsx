import PageWrapper from '@/components/PageWrapper'
import PhotoGallery from '@/components/PhotoGallery'
import type { Metadata } from 'next'
import Head from 'next/head'

export const metadata: Metadata = {
    title: 'Tetiana Andronenko',
    description: 'Tetiana Andronenko',
}

export default function Home() {
    return (
        <>
             <PageWrapper>
                <PhotoGallery />
            </PageWrapper>
        </>
    )
}
