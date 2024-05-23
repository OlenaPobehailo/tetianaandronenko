'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/lib/navigation';
import css from './Navbar.module.css';

export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
  const t = useTranslations('Navigation');
  const pathname = usePathname();

  const navigation = [
    { name: t('Links.Home'), href: '/', current: pathname === '/' },
    {
      name: t('Links.About'),
      href: '/about',
      current: pathname === '/about',
    },
    {
      name: t('Links.Gallery'),
      href: '/gallery',
      current: pathname === '/gallery',
    },
    {
      name: t('Links.Contact'),
      href: '/contact',
      current: pathname === '/contact',
    },
  ];

  return (
    <div>
      <h1 className={css.title}>{t('name')}</h1>
      <h2 className={css.subtitle}>{t('role')}</h2>
      <nav className={css.nav}>
        <ul className={css.navList}>
          <li>
            <Link href="/about">
              <span>{t('about')}</span>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <span>{t('gallery')}</span>
            </Link>
          </li>
          <li>
            <Link href="/contacts">
              <span>{t('contact')}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
