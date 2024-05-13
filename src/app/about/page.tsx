import { Metadata } from 'next'
import Image from 'next/image'
import PageWrapper from '@/components/PageWrapper'
import { images } from '@/assets/images'
import css from './about.module.css'
import ScrollArrow from '@/components/ScrollArrow'

export interface IPageProps {}

export const metadata: Metadata = {
    title: 'About Tetiana Andronenko',
}

export default function Page(props: IPageProps) {
    return (
        <PageWrapper>
            <ScrollArrow />
            <div className={css.wrapper}>
                <div className={css.imgWrapper}>
                    <Image
                        className={css.heroImage}
                        src={images.model_1091}
                        width="800"
                        alt="Tetiana Andronenko"
                        priority={true}
                    />
                </div>
                <div className={css.about}>
                    <h1>About me</h1>
                    <p>
                        Ukrainian woman who is manifesting herself in this world
                        in many ways. Professional Coach, wife, mom and a woman
                        who loves life. I bring elegance and casual chic to
                        photography. Revealing the depth of a woman&apos;s
                        feelings and beauty.
                    </p>
                    <p>Working with me fills you with energy!</p>
                </div>
            </div>
        </PageWrapper>
    )
}
