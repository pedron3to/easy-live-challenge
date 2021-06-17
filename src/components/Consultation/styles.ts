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

  @media screen and (max-width: 700px) {
    margin-top: 32px;
  }
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

export const NoConsultationsContainer = styled.div`
  width: 100vw;
  max-width: 520px;
  height: 360px;
  margin: 137px auto 0 auto;
  padding: 87px 24px 31px 24px;

  @media screen and (max-width: 970px) {
    max-width: 320px;
    margin: 67px auto 0 auto;
    padding: 0 24px 31px 24px;
  }

  > img:nth-child(1) {
    display: block;
    margin-left: auto;
  }

  > div {
    width: 206px;
    text-align: center;
    margin: 34px auto 12px auto;
  }
`;
