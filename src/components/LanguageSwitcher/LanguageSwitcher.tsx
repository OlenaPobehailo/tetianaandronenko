'use client';

import { ChangeEvent } from 'react';
import { useLocale } from 'next-intl';
import { locales } from '@/config/locale';
import { usePathname, useRouter } from '@/lib/navigation';
import css from './LanguageSwitcher.module.css';

interface Props {}

export default function LanguageSwitcher({}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const local = useLocale();

  function onRadioChange(event: ChangeEvent<HTMLInputElement>) {
    const nextLocale = event.target.value;
    router.push(pathname, { locale: nextLocale });
  }

  return (
    <form className={css.form}>
      <div className={css.radioGroup}>
        {locales?.map(item => (
          <div key={item}>
            <input
              type="radio"
              id={`locale-${item}`}
              name="locale"
              value={item}
              checked={local === item}
              onChange={onRadioChange}
              className={css.radioInput}
            />
            <label htmlFor={`locale-${item}`} className={css.radioLabel}>
              {item}
            </label>
          </div>
        ))}
      </div>
    </form>
  );
}
