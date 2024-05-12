import { Metadata } from 'next'
import Image from 'next/image'
import PageWrapper from '@/app/components/PageWrapper'
import { images } from '@/app/assets/images'
import css from './about.module.css'

export interface IPageProps {}

export const metadata: Metadata = {
    title: 'About Tetiana Andronenko',
}

export default function Page(props: IPageProps) {
    return (
        <PageWrapper>
            <div className={css.wrapper}>
                <div className={css.imgWrapper}>
                    <Image
                        className={css.heroImage}
                        src={images.hero}
                        width="800"
                        alt="Tetiana Andronenko"
                        priority={true}
                    />
                </div>
                <div className={css.about}>
                    <h1>About me</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur deserunt, exercitationem nisi quidem
                        voluptatem praesentium animi fugiat consectetur
                        doloremque quia cum, maxime quisquam dolores? Aliquid
                        veritatis rem at incidunt exercitationem.
                    </p>
                </div>
            </div>
        </PageWrapper>
    )
}
