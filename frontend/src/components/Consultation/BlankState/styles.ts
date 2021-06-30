import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  max-width: 520px;
  height: 360px;
  margin: 137px auto 0 auto;
  padding: 87px 24px 31px 24px;

  @media screen and (max-width: 970px) {
    max-width: 320px;
    margin: 67px auto 0 auto;
    padding: 0 24px 31px 24px;
  }

  > img:nth-child(1) {
    display: block;
    margin-left: auto;
  }

  > div {
    width: 206px;
    text-align: center;
    margin: 34px auto 12px auto;
  }
`;
