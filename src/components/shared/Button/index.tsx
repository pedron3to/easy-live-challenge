import { ButtonHTMLAttributes, ReactNode } from 'react';

import { ButtonContainer } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  marginTop?: number;
  onClick?: () => void;
}

export function Button({ children, marginTop, onClick, ...rest }: ButtonProps) {
  return (
    <ButtonContainer marginTop={marginTop} {...rest} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
}
