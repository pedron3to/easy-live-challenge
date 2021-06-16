import { ReactNode } from 'react';

interface H1Props {
  children: ReactNode;
}

export function H2({ children }: H1Props) {
  return <h2>{children}</h2>;
}
