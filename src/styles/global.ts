import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import 'node_modules/react-datepicker/src/stylesheets/datepicker.scss';

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

body, button {
  font-family: 'Nunito', sans-serif;
  font-size: 16px;

}

input {
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  width: 255px;
  border: none;
  padding-bottom: 8px;
  padding-top: 8px;
  outline-color: #2e50d4;


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

.react-datepicker-ignore-onclickoutside{
  border: none;
}

.react-datepicker__input-container {
    position: relative;
    display: inline-block;
    border: 0;
    border-bottom: 2px solid #dad2d0;
}

.react-datepicker, .react-datepicker__time-list-item  {
  font-family: 'Nunito', sans-serif;
  font-size: 12px;
}

.react-datepicker__header, .react-datepicker__header--time   {
    padding-bottom: 4px;
    padding-left: 5px;
    padding-right: 5px;
}



.react-datepicker {
  font-family: 'Nunito', sans-serif;

  background-color: #fff;
}

.react-datepicker__month-container {
  background-color: #fff;
  width: 170px;
  color: #575453;
  font-size: 10px;
  font-family: 'Nunito', sans-serif;

  @media screen and (max-width:400px){
    width: 235px;
    font-size: 1rem;
  }

  .react-datepicker__month {
    padding: 1rem 0;
  }

  .react-datepicker__month-text {
    display: inline-block;
    width: 235px;
    margin: 0.5rem;
    font-size: 1rem;
    padding: 0.2rem;
    &:hover {
      background-color: #2e50D4;
    }
  }

  .react-datepicker__header {
    background-color: #ffff;
  }

  .react-datepicker-ignore-onclickoutside {
    width: 255px;
  }

  .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
    width: 1.1rem;
    line-height: 1rem;
  }

  .react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header {
    font-size: 12px;
  }

  .react-datepicker__input-container {
}

input[type="text" i] {
  font-family: 'Nunito', sans-serif;
  font-size: 2px;

}
input[type="text" i]:focus-visible {
    outline: none;
}


}
`;
