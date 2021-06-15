import { Button } from '../Button/styles';
import { OutlinedButton } from '../ButtonLogOut/styles';
import { Modal } from '../Modal';
import { ConsultationFooterWrapper } from './styles';

export function ConsultationFooter({ showModal, handleCloseModal, openModal }) {
  return (
    <ConsultationFooterWrapper>
      <OutlinedButton>Ajuda</OutlinedButton>
      <Button onClick={openModal}>Agendar Consulta</Button>
      <Modal showModal={showModal} setShowModal={handleCloseModal} />
    </ConsultationFooterWrapper>
  );
}
