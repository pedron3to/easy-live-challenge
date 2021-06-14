import styled from 'styled-components';

export const LoginIlustrationWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 300px;

  @media screen and (max-width: 970px) {
    display: none;
  }
`;

export const TextWrap = styled.div`
  margin-bottom: 67px;
`;

export const ImageWrap = styled.div`
  height: 265px;
  justify-content: space-between;
  img:nth-child(2) {
    margin-left: 22px;
  }
`;
