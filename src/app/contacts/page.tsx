import { Metadata } from 'next'
import PageWrapper from '@/components/PageWrapper'

export interface IPageProps {}

export const metadata: Metadata = {
    title: 'Tetiana Andronenko - Contacts',
}

export default function Page(props: IPageProps) {
    return (
        <PageWrapper>
            <p>Contacts</p>
        </PageWrapper>
    )
}
