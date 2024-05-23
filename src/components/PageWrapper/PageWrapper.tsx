import { ReactNode } from 'react';
import css from './PageWrapper.module.css';

export interface IPageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: IPageWrapperProps) {
  return <div className={css.pageWrapper}>{children}</div>;
}
