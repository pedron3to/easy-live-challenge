import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 110px 0;
`;
export const ProductImage = styled.div`
  width: 580px;
  height: 580px;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
export const ProductInfo = styled.div`
  width: 530px;
`;
export const Code = styled.div`
  font-size: ${({ theme }) => theme.font.small};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textSemiDark};
`;
export const Title = styled.div`
  font-size: ${({ theme }) => theme.font.xLarge};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textDark};

  margin-top: 2rem;
`;
export const Description = styled.div`
  font-size: ${({ theme }) => theme.font.medium};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSemiDark};

  margin-top: 2rem;
`;
export const Price = styled.div`
  font-size: ${({ theme }) => theme.font.xLarge};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textDark};

  margin-top: 1rem;
`;
