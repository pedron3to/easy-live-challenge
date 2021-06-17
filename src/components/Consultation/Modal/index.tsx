import { useCallback, useEffect, useRef } from 'react';
// eslint-disable-next-line import-helpers/order-imports
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useForm } from 'react-hook-form';

import { api } from '../../../services/api';
import { Button } from '../../shared/Button';
import { Input, Label } from '../../shared/Form/styles';
import { FormModalContainer } from './formStyles';
import {
  AppointmentWrapper,
  BackgroundModal,
  CloseModalButton,
} from './styles';

interface ModalProps {
  showModal: any;
  setShowModal: any;
}

export function Modal({ showModal, setShowModal }: ModalProps) {
  const { handleSubmit, control, register } = useForm();

  const ModalRef = useRef<HTMLInputElement | null>(null);

  function onSubmit(data: any) {
    api.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
      'token',
    )}`;

    api
      .post('/consultations', data)
      .then(function response() {
        setShowModal();
      })
      .catch(function error(error) {
        console.log(error);
      });
  }

  function CloseModal(event: any) {
    if (ModalRef.current === event.target) {
      setShowModal(false);
    }
  }

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal],
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <BackgroundModal ref={ModalRef} onClick={CloseModal}>
          <AppointmentWrapper>
            <FormModalContainer onSubmit={handleSubmit(onSubmit)}>
              <Label>Id do Paciente</Label>
              <Input {...register('patientId')} type="number" />
              <Label>Escolha o dia e o Horário:</Label>
              <Controller
                name="date"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    showTimeSelect
                    onChange={onChange}
                    selected={value}
                    dateFormat="d MMMM, yyyy h:mm aa"
                    timeFormat="p"
                  />
                )}
              />
              <Button type="submit" marginTop={68} variant="">
                Agendar
              </Button>
            </FormModalContainer>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev: any) => !prev)}
            />
          </AppointmentWrapper>
        </BackgroundModal>
      ) : null}
    </>
  );
}
