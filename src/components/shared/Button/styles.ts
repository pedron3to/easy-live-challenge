import styled, { css } from 'styled-components';

interface ButtonType {
  marginTop?: number;
}

export const ButtonSolid = styled.button<ButtonType>`
  background: ${({ theme }) => theme.colors.textDark};
  color: ${({ theme }) => theme.colors.background};
  border: 0;
  height: 40px;
  padding-right: 2rem;
  padding-left: 2rem;
  font-size: ${({ theme }) => theme.font.small};
  font-weight: bold;
  line-height: 1.3;
  letter-spacing: 1px;

  transition: 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  ${css`
    margin-top: ${(props: ButtonType) =>
      props.marginTop !== undefined ? `${props.marginTop}px` : ''};
  `}

  @media screen and (max-width: 575px) {
    padding-right: 1rem;
    font-size: ${({ theme }) => theme.font.xsmall};

    padding-left: 1rem;
  }
`;

export const OutlinedButton = styled.button<ButtonType>`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textDark};
  border: 2px solid ${({ theme }) => theme.colors.textDark};
  height: 40px;
  padding-right: 2rem;
  padding-left: 2rem;
  font-size: ${({ theme }) => theme.font.small};
  font-weight: bold;
  line-height: 1.3;
  letter-spacing: 1px;

  transition: 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  @media screen and (max-width: 575px) {
    padding-right: 1rem;
    font-size: ${({ theme }) => theme.font.xsmall};
    padding-left: 1rem;
  }

  ${css`
    margin-top: ${(props: ButtonType) =>
      props.marginTop !== undefined ? `${props.marginTop}px` : ''};
  `}
`;
