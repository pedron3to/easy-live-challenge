import { useEffect, useState } from 'react';

import ConsultationData from '../components/Consultation/ConsultationData.js';
import { ConsultationFooter } from '../components/Consultation/ConsultationFooter.js';
import { ConsultationTitle } from '../components/Consultation/ConsultationTitle';
import { ConsultationContainer } from '../components/Consultation/styles';
import { api } from '../services/api';

export default function Consultation() {
  const [showModal, setShowModal] = useState(false);
  const [patients, setPatients] = useState([]);

  async function getConsultations() {
    api.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
      'token',
    )}`;

    const { data } = await api.get('/consultations?_expand=patient');

    console.debug('data', data);

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

  return (
    <ConsultationContainer>
      <ConsultationTitle />
      <ConsultationData patients={patients} />
      <ConsultationFooter
        handleCloseModal={handleCloseModal}
        openModal={openModal}
        showModal={showModal}
      />
    </ConsultationContainer>
  );
}
