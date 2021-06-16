import ConexaLogo from '../../../assets/logo-conexa.svg';
import { LogoContainer } from './styles';

export function Logo() {
  return (
    <LogoContainer>
      <img src={ConexaLogo} alt="Conexa Logo" />
    </LogoContainer>
  );
}
