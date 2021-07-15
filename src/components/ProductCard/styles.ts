import styled from 'styled-components';

export const Container = styled.div`
  height: 620px;
  padding: 2rem;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;
export const Image = styled.div`
  width: 318.6px;
  height: 350px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
export const Title = styled.div`
  height: 90px;
  margin-top: 2rem;
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
