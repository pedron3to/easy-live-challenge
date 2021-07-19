import styled from 'styled-components';

export const Container = styled.div`
  padding: 0rem 0 5rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 110px 0;

  @media screen and (max-width: 575px) {
    margin: 2rem 0;
  }
`;
export const Thead = styled.thead``;

export const TrHead = styled.tr`
  padding: 1rem;

  @media screen and (max-width: 575px) {
    padding: 0.25rem;
  }
`;

export const ThProduct = styled.th`
  width: 500px;
  vertical-align: bottom;
  border-bottom: 2px solid ${({ theme }) => theme.colors.backgroundFooter};
  text-align: left;
  padding-bottom: 1rem;
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.medium};
  color: ${({ theme }) => theme.colors.textDark};

  @media screen and (max-width: 575px) {
    width: 150px;
    font-size: ${({ theme }) => theme.font.small};
  }

  @media screen and (max-width: 320px) {
    width: 120px;
    font-size: ${({ theme }) => theme.font.small};
  }
`;

export const Th = styled.th`
  border-left: 2px solid ${({ theme }) => theme.colors.backgroundFooter};
  padding: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.backgroundFooter};
  text-align: center;
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ theme }) => theme.colors.textSemiDark};

  @media screen and (max-width: 575px) {
    width: 130px;
    text-align: center;
    padding: 0.25rem;
    font-size: ${({ theme }) => theme.font.xsmall};
  }
`;

export const ThTotal = styled.th`
  padding: 1rem;
  text-align: left;
  border-bottom: 2px solid ${({ theme }) => theme.colors.backgroundFooter};
  border-left: 2px solid ${({ theme }) => theme.colors.backgroundFooter};
  padding-bottom: 1rem;
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ theme }) => theme.colors.textDark};

  @media screen and (max-width: 575px) {
    font-size: ${({ theme }) => theme.font.xsmall};
  }
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
  width: 760px;

  @media screen and (max-width: 1000px) {
    width: 500px;
  }

  @media screen and (max-width: 900px) {
    width: 400px;
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (max-width: 768px) {
    width: 200px;
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (max-width: 575px) {
    flex-direction: column;
    align-items: flex-start;
    width: 115px;
  }

  @media screen and (max-width: 320px) {
    width: 100px;
  }
`;

export const ImageContainer = styled.div`
  width: 130px;
  height: 130px;
  margin: 24px 50px 24px 0;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media screen and (max-width: 575px) {
    width: 100px;
    height: 100px;
    margin: 8px 0px 8px 0;
  }
`;

export const Description = styled.div`
  width: 580px;
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ theme }) => theme.colors.textDark};
  font-weight: bold;

  @media screen and (max-width: 575px) {
    width: 100px;
    font-size: ${({ theme }) => theme.font.xsmall};
  }
`;

export const Td = styled.td`
  border-left: 2px solid ${({ theme }) => theme.colors.backgroundFooter};
  padding: 1rem;
  text-align: center;
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ theme }) => theme.colors.textSemiDark};

  width: 120px;

  @media screen and (max-width: 575px) {
    padding: 0.25rem;
    font-size: ${({ theme }) => theme.font.xsmall};
  }
`;

export const AmountContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 575px) {
    width: 100%;
    padding: 0.25rem;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

export const Input = styled.input`
  text-align: center;
  padding: 4px;
  margin-left: 0.4rem;
  width: 30px;
  border-radius: 10px;
  border: none;
  font-size: ${({ theme }) => theme.font.xsmall};
  color: ${({ theme }) => theme.colors.textSemiDark};

  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  @media screen and (max-width: 575px) {
    margin-left: 0;
  }
`;
export const Button = styled.button`
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.font.medium};
  color: ${({ theme }) => theme.colors.textSemiDark};
`;

export const TdTotal = styled.td`
  border-left: 2px solid ${({ theme }) => theme.colors.backgroundFooter};
  padding: 1rem 0 1rem 1rem;

  @media screen and (max-width: 575px) {
    padding: 0.25rem;
    width: 100px;
    font-size: ${({ theme }) => theme.font.xsmall};
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  @media screen and (max-width: 575px) {
    height: 90px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const Span = styled.span`
  margin-right: 1rem;
  font-size: ${({ theme }) => theme.font.medium};
  color: ${({ theme }) => theme.colors.textDark};
  font-weight: bold;

  @media screen and (max-width: 575px) {
    margin-right: 0.25rem;
    margin-bottom: 0.75rem;
    font-size: ${({ theme }) => theme.font.xsmall};
  }
`;

export const SummaryContainer = styled.div`
  width: 570px;
`;
export const TotalSummaryContainer = styled.div`
  display: flex;

  font-size: ${({ theme }) => theme.font.large};
  color: ${({ theme }) => theme.colors.textDark};
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.font.medium};
  }
  > h4 {
    margin-left: 1rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;

  @media screen and (max-width: 768px) {
    height: 94px;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 1.5rem;
  }
`;

export const Message = styled.div`
  width: 100%;
  height: 500px;
  text-align: center;
  padding-top: 5rem;
  font-size: ${({ theme }) => theme.font.xLarge};
  color: ${({ theme }) => theme.colors.textDark};
  font-weight: Bold;
`;
