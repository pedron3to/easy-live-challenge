import { useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../../Context/AuthContext';
import { ButtonLogOut } from '../ButtonLogOut';
import { Logo } from '../Logo';
import { HeaderWrap } from './styles';

const DoctorWrap = styled.div`
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

export function Header() {
  const { authenticated, doctorName } = useContext(Context);
  return (
    <HeaderWrap>
      <Logo />
      {authenticated ? (
        <DoctorWrap>
          <h5>Olá, Dr. {doctorName}</h5>
          <ButtonLogOut />
        </DoctorWrap>
      ) : (
        ''
      )}
    </HeaderWrap>
  );
}
