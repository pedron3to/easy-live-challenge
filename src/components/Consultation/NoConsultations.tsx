import certificates from '../../assets/illustration-certificates.svg';
import plant from '../../assets/illustration-plant.svg';
import { NoConsultationsContainer } from './styles';

export function NoConsultations() {
  return (
    <NoConsultationsContainer>
      <img src={certificates} alt="plant" />
      <div>
        <h4>Não há nenhuma consulta agendada</h4>
      </div>
      <img src={plant} alt="plant" />
    </NoConsultationsContainer>
  );
}
