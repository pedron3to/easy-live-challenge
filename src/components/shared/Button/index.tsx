import { ButtonHTMLAttributes, ReactNode } from 'react';

import { ButtonContainer } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  marginTop?: number;
}

export function Button({ children, marginTop, ...rest }: ButtonProps) {
  return (
    <ButtonContainer marginTop={marginTop} {...rest}>
      {children}
    </ButtonContainer>
  );
}
