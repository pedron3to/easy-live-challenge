import { ButtonHTMLAttributes, ReactNode } from 'react';

import { ButtonSolid, OutlinedButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  marginTop?: number;
  variant?: string;
}

export function Button({ children, marginTop, variant, ...rest }: ButtonProps) {
  return variant === 'outlined' ? (
    <OutlinedButton {...rest}>{children}</OutlinedButton>
  ) : (
    <ButtonSolid marginTop={marginTop} {...rest}>
      {children}
    </ButtonSolid>
  );
}
