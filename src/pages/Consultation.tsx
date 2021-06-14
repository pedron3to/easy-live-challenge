import { useCallback, useEffect, useState } from 'react';

import { Button } from '../components/Button/styles';
import { OutlinedButton } from '../components/ButtonLogOut/styles';
import { ConsultationFooter } from '../components/Consultation/ConsultationFooter';
import {
  ConsultationDataWrap,
  ConsultationWrapper,
  ConsultationTextWrapper,
  ConsultationDataTitleWrap,
  ConsultationPatientInfo,
  ConsultationFooterWrapper,
  DateWrap,
} from '../components/Consultation/styles';
import { Modal } from '../components/Modal';
import { api } from '../services/api';

export default function Consultation() {
  const [showModal, setShowModal] = useState(false);
  const [patients, setPatients] = useState([]);

  async function getConsultations() {
    api.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
      'token',
    )}`;

    const { data } = await api.get('/consultations?_expand=patient');

    console.log(data);

    setPatients(data);
  }

  useEffect(() => {
    getConsultations();
  }, []);

  const handleCloseModal = async () => {
    await getConsultations();
    setShowModal(false);
  };

  function openModal() {
    setShowModal(prev => !prev);
  }

  const Dateformatter = Intl.DateTimeFormat('pt-br', {
    dateStyle: 'short',
  });

  const Hourformatter = Intl.DateTimeFormat('pt-br', {
    hour: 'numeric',
    minute: 'numeric',
  });

  return (
    <ConsultationWrapper>
      <ConsultationTextWrapper>
        <h2>Consultas</h2>
      </ConsultationTextWrapper>

      <ConsultationDataWrap>
        <ConsultationDataTitleWrap>
          <h6>{patients.length} consultas agendadas</h6>
        </ConsultationDataTitleWrap>

        {patients.map(
          ({ id, date, patient: { patiendId, first_name, last_name } }) => (
            <ConsultationPatientInfo key={id}>
              <div>
                <div>
                  {first_name} {last_name}
                </div>
                <DateWrap>
                  <p key={patiendId}>
                    {Dateformatter.format(Date.parse(date))}
                  </p>
                  <p>às</p>
                  <p>{Hourformatter.format(Date.parse(date))}</p>
                </DateWrap>
              </div>
              <Button>Atender</Button>
            </ConsultationPatientInfo>
          ),
        )}
      </ConsultationDataWrap>
      <ConsultationFooterWrapper>
        <OutlinedButton>Ajuda</OutlinedButton>
        <Button onClick={openModal}>Agendar Consulta</Button>
        <Modal showModal={showModal} setShowModal={handleCloseModal} />
      </ConsultationFooterWrapper>
      {/* <ConsultationFooter setShowModal={handleCloseModal} /> */}
    </ConsultationWrapper>
  );
}
