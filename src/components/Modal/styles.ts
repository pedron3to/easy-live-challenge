import styled from 'styled-components'
import { MdClose } from 'react-icons/md'

export const BackgroundModal = styled.div`
position: fixed;
display: flex;
top: 0; 
left: 0;
right: 0;
height: 100%;
align-items: center;
justify-content: center;
background: rgba(0,0,0,0.8);
`
export const AppointmentWrapper = styled.div`
  position: relative;
  display: flex;
  margin: 1rem;
  width: 80%;
  height: 80%;
  background: #fff;
  border-radius: 1rem;
  align-items:center;
  justify-content:center;
`;

export const CloseModalButton = styled(MdClose)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
`;