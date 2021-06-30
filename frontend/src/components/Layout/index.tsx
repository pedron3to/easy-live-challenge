import { ReactNode } from 'react';

import { NavMenu } from '../NavMenu';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavMenu />
      {children}
    </>
  );
}
