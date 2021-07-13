import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
`;
export const Title = styled.div`
  font-size: ${({ theme }) => theme.font.xLarge};
  color: ${({ theme }) => theme.colors.textDark};
  font-weight: bold;

  margin-bottom: 2rem;
`;
export const ProductSection = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;
