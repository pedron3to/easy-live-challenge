import styled from 'styled-components';

export const LoginWrap = styled.div`
  display: flex;
  width: 100vw;
  height: calc(100vh - 57px);
  align-items: center;
  justify-content: center;
  margin-top: 57px;

  @media screen and (max-width: 970px) {
    flex-direction: column;
  }
`;
