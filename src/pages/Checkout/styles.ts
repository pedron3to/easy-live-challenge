import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 110px 0;
`;
export const Thead = styled.thead``;

export const TrHead = styled.tr`
  padding: 1rem;
`;

export const ThProduct = styled.th`
  vertical-align: bottom;
  border-bottom: 2px solid ${({ theme }) => theme.colors.backgroundFooter};
  text-align: left;
  padding-bottom: 1rem;
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.medium};
  color: ${({ theme }) => theme.colors.textDark};
`;

export const Th = styled.th`
  border-left: 2px solid ${({ theme }) => theme.colors.backgroundFooter};
  padding: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.backgroundFooter};
  text-align: left;
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ theme }) => theme.colors.textSemiDark};
`;

export const ThTotal = styled.th`
  padding: 1rem;
  text-align: left;
  border-bottom: 2px solid ${({ theme }) => theme.colors.backgroundFooter};
  border-left: 2px solid ${({ theme }) => theme.colors.backgroundFooter};
  padding-bottom: 1rem;
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ theme }) => theme.colors.textDark};
`;

export const Tbody = styled.tbody`
  margin-bottom: 2rem;
`;

export const TrBody = styled.tr`
  vertical-align: center;
`;

export const TdImage = styled.td`
  display: flex;
  align-items: center;
  width: 680px;
`;

export const ImageContainer = styled.div`
  width: 130px;
  height: 130px;
  background: black;
  margin: 24px 50px 24px 0;
`;

export const Td = styled.td`
  border-left: 2px solid ${({ theme }) => theme.colors.backgroundFooter};
  padding: 1rem;
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ theme }) => theme.colors.textSemiDark};

  width: 120px;
`;

export const TdTotal = styled.td`
  border-left: 2px solid ${({ theme }) => theme.colors.backgroundFooter};
  padding: 1rem 0 1rem 1rem;
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.font.medium};
  color: ${({ theme }) => theme.colors.textDark};
  font-weight: bold;
`;

export const AmountContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60px;
`;

export const Button = styled.button`
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.font.medium};
  color: ${({ theme }) => theme.colors.textSemiDark};
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Span = styled.span`
  margin-right: 1rem;
  font-size: ${({ theme }) => theme.font.medium};
  color: ${({ theme }) => theme.colors.textDark};
  font-weight: bold;
`;
