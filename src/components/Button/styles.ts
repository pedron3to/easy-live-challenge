import styled, { css } from 'styled-components'

interface ButtonType {
  marginTop?: number;
};

export const Button = styled.button<ButtonType>`
 background: #2E50D4;
 color: #fff;
 border:0;
 padding: 8px;
 border-radius: 8px;

 font-size: 14px;
 font-weight: bold;
 line-height: 1.3;
 letter-spacing: 1px;

 transition: .2s;

 &:hover {
   filter: brightness(.8);
 }
 
 ${css`
    margin-top: ${(props: ButtonType) =>
      props.marginTop !== undefined ? props.marginTop + "px" : ''};
  `}

`;

