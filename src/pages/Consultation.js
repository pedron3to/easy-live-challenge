import { useEffect, useState } from 'react';

import { BlankState } from '../components/Consultation/BlankState';
import { ConsultationFooter } from '../components/Consultation/ConsultationFooter.js';
import { ConsultationHeader } from '../components/Consultation/ConsultationHeader';
import { ConsultationList } from '../components/Consultation/ConsultationList/index.js';
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
      <ConsultationHeader />
      {patients.length === 0 ? (
        <BlankState />
      ) : (
        <ConsultationList patients={patients} />
      )}
      <ConsultationFooter
        handleCloseModal={handleCloseModal}
        openModal={openModal}
        showModal={showModal}
      />
    </ConsultationContainer>
  );
}
