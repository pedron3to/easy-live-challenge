import styled, { css } from 'styled-components';

interface ButtonType {
  marginTop?: number;
}

export const ButtonContainer = styled.button<ButtonType>`
  background: ${({ theme }) => theme.colors.textDark};
  color: ${({ theme }) => theme.colors.background};
  border: 0;
  height: 40px;
  padding-right: 2rem;
  padding-left: 2rem;
  font-size: 14px;
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
`;
