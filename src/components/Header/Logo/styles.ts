import styled from 'styled-components';

export const Container = styled.div`
  font-size: ${({ theme }) => theme.font.large};
  color: ${({ theme }) => theme.colors.textDark};
  font-weight: bold;
`;
