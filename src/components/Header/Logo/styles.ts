import styled from 'styled-components';

export const Container = styled.div`
  font-size: ${({ theme }) => theme.font.large};
  color: ${({ theme }) => theme.colors.textDark};
  font-weight: bold;

  @media screen and (max-width: 575px) {
    font-size: ${({ theme }) => theme.font.medium};
  }
`;
