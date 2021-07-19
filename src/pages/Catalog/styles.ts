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
  display: grid;
  width: 100%;
  /*  grid-template-columns: 382.6px 382.6px 382.6px;
  column-gap: auto;

  @media screen and (max-width: 1000px) {
    width: 1000px;
    grid-template-columns: 382.6px 382.6px;
    column-gap: ;
  } */
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 1220px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 990px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;
