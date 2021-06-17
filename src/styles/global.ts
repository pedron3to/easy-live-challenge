import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #fff;
  color: #333;
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}

h1 {
  font-size: 52px;
  color:#1C307F;
  line-height: 1.15;
  letter-spacing: -2.5px;
  font-family: 'Montserrat', sans-serif;

}

h2 {
  font-size: 48px;
  font-weight: 700;
  color:#1C307F;
  line-height: 1.35;
}


h5 {
  font-weight: 600;
  font-size:16px;
  line-height: 1.5;
}

h4 {
  font-weight: 700;
  font-size:18px;
  line-height: 1.5;
  color:#999392;
}

h6 {
  font-size: 16px;
  line-height: 1.25;
  font-weight: 700;
  color:#575453;
}

p{
  font-weight: 400;
  font-size:16px;
  line-height: 1.5;
}


button {
  cursor: pointer;
}
`;
