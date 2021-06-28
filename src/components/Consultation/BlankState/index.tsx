import certificates from '../../../assets/illustration-certificates.svg';
import plant from '../../../assets/illustration-plant.svg';
import { Container } from './styles';

export function BlankState() {
  return (
    <Container>
      <img src={certificates} alt="certificates" />
      <div>
        <h4>Não há nenhuma consulta agendada</h4>
      </div>
      <img src={plant} alt="plant" />
    </Container>
  );
}
