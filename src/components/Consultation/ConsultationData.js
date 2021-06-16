import { Button } from '../shared/Button';
import { ConsultationDataTitle } from './ConsultationDataTitle';
import {
  ConsultationDataContainer,
  ConsultationPatientInfo,
  DateWrap,
} from './styles';
import { ZeroConsultation } from './ZeroConsultation';

export default function ConsultationData({ patients }) {
  const Dateformatter = Intl.DateTimeFormat('pt-br', {
    dateStyle: 'short',
  });

  const Hourformatter = Intl.DateTimeFormat('pt-br', {
    hour: 'numeric',
    minute: 'numeric',
  });

  return (
    <ConsultationDataContainer>
      <ConsultationDataTitle>
        {patients.length} consultas agendadas
      </ConsultationDataTitle>

      {patients.map(
        ({ id, date, patient: { patiendId, first_name, last_name } }) => (
          <ConsultationPatientInfo key={id}>
            <div>
              <div>
                {first_name}
                {last_name}
              </div>
              <DateWrap>
                <p key={patiendId}>{Dateformatter.format(Date.parse(date))}</p>
                <p>às</p>
                <p>{Hourformatter.format(Date.parse(date))}</p>
              </DateWrap>
            </div>
            <Button>Atender</Button>
          </ConsultationPatientInfo>
        ),
      )}
    </ConsultationDataContainer>
  );
}
