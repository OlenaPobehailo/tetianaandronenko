import Link from 'next/link'
import css from './Navbar.module.css'
import Container from '../Container'

export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
    return (
        <div className={css.header}>
            <h1 className={css.title}>Tetiana Andronenko</h1>
            <h2 className={css.subtitle}>Model</h2>
            <nav className={css.nav}>
                <ul className={css.navList}>
                    <li>
                        <Link href="/about">
                            <span>About</span>
                        </Link>
                    </li>
                    <li className="content ">
                        <Link href="/gallery">
                            <span>Gallery</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contacts">
                            <span>Contact me</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
