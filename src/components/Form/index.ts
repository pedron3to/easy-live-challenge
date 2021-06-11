import styled from 'styled-components'

export const Form = styled.form`
 display : flex;
 flex-direction: column;
 
 width: 235px;

 label:nth-child(2) {
   margin-top: 32px;
 }
`;

export const Label = styled.label`
 display : flex;
 flex-direction: column;
 font-size: 14px;
 font-weight: 400;
 line-height: 1.42;
 color:#575453; 
`;

export const Input = styled.input`
width: 100%;
font-style: italic;
font-weight: 300;
font-size: 14px;
padding-bottom: 8px;
padding-top: 8px;
border:0;
border-bottom: 2px solid #dad2d0;
background: transparent;
`;

export const PasswordWrap = styled.div`
 position: relative;
 display: flex;

> i {
  position: absolute;
  top: 20%;
  right: 0%;

&:hover {
  cursor: pointer;
}

}
`;