import styled, { css } from 'styled-components';

interface ButtonType {
  marginTop?: number;
}

export const ButtonSolid = styled.button<ButtonType>`
  background: #2e50d4;
  color: #fff;
  border: 0;
  height: 40px;
  border-radius: 8px;
  padding-right: 8px;
  padding-left: 8px;
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

export const OutlinedButton = styled.button`
  padding: 7px 16px 7px 16px;
  border-radius: 6px;
  color: #2e50d4;
  border: 2px solid #2e50d4;

  font-weight: Bold;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 1px;

  background: transparent;

  &:hover {
    filter: brightness(0.7);
  }
`;
