import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
  }

  button {
    cursor: pointer;
  }

  h1 {
    font-size: ${({ theme }) => theme.font.xLarge};
    color: ${({ theme }) => theme.colors.textDark};
  }

  a{
    text-decoration: none;
  }
`;
