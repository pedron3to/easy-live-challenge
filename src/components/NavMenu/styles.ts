import styled from 'styled-components';

export const HeaderWrap = styled.nav`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem 0 1rem;
  top: 0;
  right: 0;
  left: 0;

  width: 100%;
  height: 57px;

  background: #fffffb;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);

  @media screen and (max-width: 480px) {
    justify-content: center;
  }
`;

export const AuthenticatedHeadContainer = styled.nav`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem 0 1rem;
  top: 0;
  right: 0;
  left: 0;

  width: 100%;
  height: 57px;

  background: #fffffb;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
`;

export const DoctorContainer = styled.div`
  display: flex;
  align-items: center;
  > h5 {
    margin-right: 16px;
  }

  @media screen and (max-width: 480px) {
    h5 {
      display: none;
    }
  }
`;
