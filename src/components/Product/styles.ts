import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 110px 0;

  @media screen and (max-width: 970px) {
    flex-direction: column;
    margin: 80px 0;
  }

  @media screen and (max-width: 575px) {
    margin-top: 2rem;
  }
`;
export const ProductImage = styled.div`
  width: 100%;
  height: 580px;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media screen and (max-width: 1180px) {
    height: 450px;
  }

  @media screen and (max-width: 1024px) {
    width: 60%;
    height: 400px;
  }

  @media screen and (max-width: 970px) {
    width: 60%;
    height: 350px;
  }

  @media screen and (max-width: 768px) {
    width: 60%;
    height: 300px;
  }

  @media screen and (max-width: 575px) {
    width: 80%;
    height: 300px;
  }
`;
export const ProductInfo = styled.div`
  width: 100%;

  @media screen and (max-width: 1024px) {
    width: 60%;
  }

  @media screen and (max-width: 970px) {
    height: 300px;
  }

  @media screen and (max-width: 768px) {
    width: 60%;
  }

  @media screen and (max-width: 575px) {
    width: 100%;
  }
`;
export const Code = styled.div`
  font-size: ${({ theme }) => theme.font.small};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textSemiDark};

  @media screen and (max-width: 970px) {
    font-size: ${({ theme }) => theme.font.xsmall};
  }

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
  }

  @media screen and (max-width: 575px) {
    margin-top: 1rem;
  }
`;
export const Title = styled.div`
  font-size: ${({ theme }) => theme.font.xLarge};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textDark};

  margin-top: 2rem;

  @media screen and (max-width: 970px) {
    font-size: ${({ theme }) => theme.font.large};
    margin-top: 0.75rem;
  }
`;
export const Description = styled.div`
  font-size: ${({ theme }) => theme.font.medium};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSemiDark};

  margin-top: 2rem;

  @media screen and (max-width: 970px) {
    font-size: ${({ theme }) => theme.font.small};
    margin-top: 0.75rem;
  }
`;
export const Price = styled.div`
  font-size: ${({ theme }) => theme.font.xLarge};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textDark};

  margin-top: 1rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 970px) {
    font-size: ${({ theme }) => theme.font.large};
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  @media screen and (max-width: 575px) {
    margin-bottom: 0.75rem;
    margin-top: 0.75rem;
  }
`;
