import styled from 'styled-components';

export const ConsultationContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 57px -69px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 57px;
  margin-bottom: 69px;
`;

export const ConsultationHeaderContainer = styled.div`
  align-items: center;
  margin-top: 32px;
  margin-left: 29px;

  @media screen and (max-width: 320px) {
    margin-left: 1rem;
    > h2 {
      font-size: 28px;
    }
  }
`;

export const ConsultationFooterContainer = styled.div`
  position: fixed;
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  bottom: 0;
  right: 0;
  left: 0;
  border-top: 1px solid #dad2d0;
`;

export const ConsultationDataTitleContainer = styled.div`
  margin-bottom: 24px;
`;
