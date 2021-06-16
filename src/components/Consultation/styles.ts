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

export const ConsultationDataContainer = styled.div`
  width: 100vw;
  max-width: 520px;
  margin: 76px auto 0 auto;
  padding: 0 1rem;
`;

export const ConsultationTextContainer = styled.div`
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

export const ConsultationDataTitleContainer = styled.div`
  margin-bottom: 24px;
`;

export const ConsultationPatientInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
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

export const DateWrap = styled.div`
  display: flex;
  align-items: flex-end;
  > p:nth-child(2) {
    padding-left: 2.5px;
    padding-right: 2.5px;
  }
`;
