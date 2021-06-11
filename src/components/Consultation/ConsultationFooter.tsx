import { ConsultationFooterWrapper } from './styles'
import { OutlinedButton } from '../ButtonLogOut/styles'
import { Button } from '../Button/styles'
import { Modal } from '../Modal'

// interface ConsultationFooterProps {
//   openModal: () => void;
//   showModal: boolean;
//   handleCloseModal: boolean;
//   onClick: () => void;


// }

export function ConsultationFooter({
  openModal,
  showModal,
  handleCloseModal,

}: any) {
  return (
    <ConsultationFooterWrapper>
      <OutlinedButton>Ajuda</OutlinedButton>
      <Button onClick={openModal}>Agendar Consulta</Button>
      <Modal showModal={showModal} setShowModal={handleCloseModal} />
    </ConsultationFooterWrapper>
  )
}
