import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  max-width: 520px;
  margin: 76px auto 0 auto;
  padding: 0 1rem;

  @media screen and (max-width: 700px) {
    margin-top: 32px;
  }
`;

export const SubTitle = styled.div`
  margin-bottom: 24px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  > p:nth-child(2) {
    padding-left: 2.5px;
    padding-right: 2.5px;
  }
`;
