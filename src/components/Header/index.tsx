import { useContext } from 'react'
import { ButtonLogOut } from '../ButtonLogOut'
import { Logo } from '../Logo'
import { HeaderWrap } from './styles'
import { Context } from '../../Context/AuthContext'
import styled from 'styled-components'

const DoctorWrap = styled.div`
display: flex;
align-items: center;
  > p{
    margin-right: 16px;
}

@media screen and (max-width: 420px) {
  >h5 {

    display: none;
  }
}
`;


export function Header() {
  const { authenticated, doctorName } = useContext(Context)
  return (
    <HeaderWrap>
      <Logo />

      { authenticated
        ?

        <DoctorWrap>
          <h5>Olá, Dr. {doctorName}</h5>
          <ButtonLogOut />
        </DoctorWrap>

        : ''
      }

    </HeaderWrap>
  )
}