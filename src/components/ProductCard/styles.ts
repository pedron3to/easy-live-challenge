import styled from 'styled-components';

export const Container = styled.div`
  height: 480px;
  padding: 2rem;
  transition: 0.31s;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow};
  }

  @media screen and (max-width: 750px) {
    margin: 0 20%;
  }

  @media screen and (max-width: 575px) {
    margin: 0 10%;
  }
`;
export const Image = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
export const Title = styled.div`
  margin: 1rem 0 1rem 0;
  color: ${({ theme }) => theme.colors.textSemiDark};
  font-size: ${({ theme }) => theme.font.small};
  font-weight: bold;
`;
export const Price = styled.div`
  color: ${({ theme }) => theme.colors.textDark};
  font-size: ${({ theme }) => theme.font.medium};
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
