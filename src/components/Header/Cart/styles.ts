import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-left: 6rem;

  @media screen and(max-width: 575px) {
    padding-left: 1rem;
  }
`;

export const CounterCart = styled.span`
  position: relative;
  margin-left: -12px;
  margin-top: -8px;
  height: 18px;
  padding: 0 6px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.attention};
  text-align: center;
  text-justify: center;
  color: ${({ theme }) => theme.colors.background};
  font-size: 12px;
  font-weight: bold;
`;
