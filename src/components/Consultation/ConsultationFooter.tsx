import { useState } from 'react';

// import { Button } from '../Button/styles';
// import { OutlinedButton } from '../ButtonLogOut/styles';
// import { Modal } from '../Modal';
// import { ConsultationFooterWrapper } from './styles';

export function ConsultationFooter() {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(prev => !prev);
  }

  return (
    // <ConsultationFooterWrapper>
    //   <OutlinedButton>Ajuda</OutlinedButton>
    //   <Button onClick={openModal}>Agendar Consulta</Button>
    //   <Modal showModal={showModal} setShowModal={handleCloseModal} />
    // </ConsultationFooterWrapper>
    <div>te4ste</div>
  );
}