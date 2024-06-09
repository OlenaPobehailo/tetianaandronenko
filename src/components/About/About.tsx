'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import ScrollArrow from '@/components/ScrollArrow';
import { images } from '@/assets/images';
import { handleContextMenu } from '@/utils/handleContextMenu';
import css from './About.module.css';

type Props = {};

const About = (props: Props) => {
  const t = useTranslations('About');

  return (
    <>
      <ScrollArrow />
      <div className={css.wrapper}>
        <div className={css.imgWrapper}>
          <Image
            className={css.heroImage}
            src={images.model_1104}
            width="800"
            alt="Model Tetiana Andronenko"
            priority={true}
            onContextMenu={handleContextMenu}
          />
        </div>
        <div className={css.about}>
          <h1>{t('title')}</h1>
          <p>{t('text-1')}</p>
          <p>{t('text-2')}</p>
        </div>
      </div>
    </>
  );
};

export default About;
