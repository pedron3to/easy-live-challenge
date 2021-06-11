import ConexaLogo from '../../assets/logo-conexa.svg'
import { LogoWrap } from './styles'

export function Logo() {
  return (
    <LogoWrap>
      <img src={ConexaLogo} alt="Conexa Logo" />
    </LogoWrap>
  )
}