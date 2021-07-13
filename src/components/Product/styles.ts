import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
`;
export const Image = styled.div``;
export const Title = styled.div`
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.textSemiDark};
  font-size: ${({ theme }) => theme.font.small};
  font-weight: bold;
`;
export const Price = styled.div`
  margin-top: 0.625rem;
  color: ${({ theme }) => theme.colors.textDark};
  font-size: ${({ theme }) => theme.font.medium};
  font-weight: bold;
`;
