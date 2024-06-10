'use client';

import { ReactNode } from 'react';

export interface IContainerProps {
  children: ReactNode;
}

export default function FullContainer({ children }: IContainerProps) {
  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    return false;
  };

  return (
    <div class="scroll-container" onContextMenu={handleContextMenu}>
      {children}
    </div>
  );
}
