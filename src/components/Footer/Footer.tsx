import { useTranslations } from 'next-intl';
import css from './Footer.module.css';

type Props = {};

const Footer = (props: Props) => {
  const t = useTranslations('Footer');

  return (
    <div className={css.footer}>
      <p className={css.name}>&copy;&nbsp;Tetiana Andronenko&nbsp;2024</p>
      <p className={css.copyright}>{t('copyright')}</p>
    </div>
  );
};

export default Footer;
