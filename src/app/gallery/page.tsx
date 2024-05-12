import { Metadata } from 'next'
import PageWrapper from '@/app/components/PageWrapper'
import PhotoGallery from '../components/PhotoGallery'

export interface IPageProps {}

export const metadata: Metadata = {
    title: 'Tetiana Andronenko - Gallery',
}

export default function Page(props: IPageProps) {
    return (
        <>
            <PageWrapper>
                <h1>Gallery</h1>
                <PhotoGallery />
            </PageWrapper>
        </>
    )
}
