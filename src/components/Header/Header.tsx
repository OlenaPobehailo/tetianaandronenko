import Navbar from '@/components/Navbar';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import css from './Header.module.css';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className={css.header}>
      <LanguageSwitcher />
      <Navbar />
    </div>
  );
};

export default Header;
