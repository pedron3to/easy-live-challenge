import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  > a {
    margin-left: 3rem;
    color: ${({ theme }) => theme.colors.textSemiDark};
    font-size: ${({ theme }) => theme.font.small};
    font-weight: bold;

    @media screen and (max-width: 575px) {
      font-size: ${({ theme }) => theme.font.xsmall};
    }
  }

  a:first-child {
    margin-left: 0rem;
  }
`;
