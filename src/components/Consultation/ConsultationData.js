import { Button } from '../Button/styles';
import {
  ConsultationDataTitleContainer,
  ConsultationDataContainer,
  ConsultationPatientInfo,
  DateWrap,
} from './styles';

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
      <ConsultationDataTitleContainer>
        <h6>{patients.length} consultas agendadas</h6>
      </ConsultationDataTitleContainer>

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
