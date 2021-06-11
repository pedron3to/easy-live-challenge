import { useCallback, useContext, useEffect, useRef } from "react"
import DatePicker, { } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AppointmentWrapper, BackgroundModal, CloseModalButton } from "./styles"
import { Controller, useForm } from 'react-hook-form'
import { Form, Input, Label, } from '../Form';
import { Button } from '../Button/styles';
import { api } from "../../services/api";

interface ModalProps {
  showModal: any,
  setShowModal: any
}

export function Modal({ showModal, setShowModal }: ModalProps) {
  const { handleSubmit, control, register } = useForm()

  const ModalRef = useRef<HTMLInputElement | null>(null);

  function onSubmit(data: any) {
    console.log(data)

    api.defaults.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

    api.post('/consultations', data)
      .then(function (response) {
        setShowModal()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function CloseModal(event: any) {
    if (ModalRef.current === event.target) {
      setShowModal(false);
    }
  }

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false)
      }
    },
    [setShowModal, showModal],
  )

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])

  interface RenderProps {
    onChange: (value: any) => void;
    value: unknown;
  }

  return (
    <>
      {showModal ?
        <BackgroundModal ref={ModalRef} onClick={CloseModal}>
          <AppointmentWrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Label>
                Nome do Paciente
              </Label>
              <Input  {...register("patientId")} type='number' />
              <Label>
                Escolha o dia e o Horário:
              </Label>
              <Controller
                name='date'
                control={control}
                render={
                  ({
                    field: { onChange, value },
                  }) =>
                    <DatePicker
                      showTimeSelect
                      onChange={onChange}
                      selected={value}
                      dateFormat="d MMMM, yyyy h:mm aa"
                      timeFormat="p"
                    />
                }
              />
              <Button type='submit' marginTop={68}>Agendar</Button>
            </Form>
            <CloseModalButton
              aria-label='Close modal'
              onClick={() => setShowModal((prev: any) => !prev)} />
          </AppointmentWrapper>
        </BackgroundModal> : null}
    </>
  )
}