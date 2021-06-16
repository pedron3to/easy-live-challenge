import certificates from '../../assets/illustration-certificates.svg';
import plant from '../../assets/illustration-plant.svg';

export function ZeroConsultation() {
  return (
    <div>
      <img src={certificates} alt="plant" />
      <h4>não há nenhuma consulta agendada</h4>
      <img src={plant} alt="plant" />
    </div>
  );
}
