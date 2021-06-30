import { Button } from '../shared/Button';
import { Modal } from './Modal';
import { ConsultationFooterContainer } from './styles';

export function ConsultationFooter({ showModal, handleCloseModal, openModal }) {
  return (
    <ConsultationFooterContainer>
      <Button variant="outlined">Ajuda</Button>
      <Button onClick={openModal}>Agendar Consulta</Button>
      <Modal showModal={showModal} setShowModal={handleCloseModal} />
    </ConsultationFooterContainer>
  );
}
