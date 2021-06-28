import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 235px;

  @media screen and (max-width: 500px) {
    width: 272px;
  }

  > span {
    color: tomato;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: #575453;

  &:nth-child(3) {
    margin-top: 32px;
  }

  > i {
    padding-left: 8px;
  }
`;

export const Input = styled.input`
  width: 100%;
  font-style: italic;
  font-weight: 300;
  font-size: 14px;
  padding-bottom: 8px;
  padding-top: 8px;
  border: 0;
  border-bottom: 2px solid #dad2d0;
  background: transparent;
  outline-color: #2e50d4;
`;

export const PasswordWrap = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 68px;

  @media screen and (max-width: 500px) {
    margin-bottom: 40px;
  }

  > i {
    position: absolute;
    top: 20%;
    right: 0%;

    &:hover {
      cursor: pointer;
    }
  }
`;
