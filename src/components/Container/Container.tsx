import { ReactNode } from 'react';
import css from './Container.module.css';

export interface IContainerProps {
  children: ReactNode;
}

export default function Container({ children }: IContainerProps) {
  return <div className={css.container}>{children}</div>;
}
