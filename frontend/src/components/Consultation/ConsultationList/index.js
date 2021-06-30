import { Button } from '../../shared/Button';
import { Container, SubTitle, DateWrapper, List } from './styles';

export function ConsultationList({ patients }) {
  const Dateformatter = Intl.DateTimeFormat('pt-br', {
    dateStyle: 'short',
  });

  const Hourformatter = Intl.DateTimeFormat('pt-br', {
    hour: 'numeric',
    minute: 'numeric',
  });

  return (
    <Container>
      <SubTitle>
        <h6>{patients.length} consultas agendadas</h6>
      </SubTitle>

      {patients.map(
        ({ id, date, patient: { patiendId, first_name, last_name } }) => (
          <List key={id}>
            <div>
              <>
                {first_name}
                {last_name}
              </>
              <DateWrapper>
                <p key={patiendId}>{Dateformatter.format(Date.parse(date))}</p>
                <p>às</p>
                <p>{Hourformatter.format(Date.parse(date))}</p>
              </DateWrapper>
            </div>
            <Button>Atender</Button>
          </List>
        ),
      )}
    </Container>
  );
}
