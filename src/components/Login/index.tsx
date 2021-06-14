import { forwardRef, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

import { Context } from '../../Context/AuthContext';
import { Button } from '../Button/styles';
import { FormContainer, Input, Label, PasswordWrap } from '../Form/styles';
import { LoginIlustration } from '../LoginIlustration';
import { LoginWrap } from './styles';

export const Login = forwardRef(() => {
  const { onSubmit } = useContext(Context);
  const [passwordShown, setPasswordShown] = useState(false);
  const { register, handleSubmit } = useForm();

  function togglePasswordVisibility() {
    setPasswordShown(!passwordShown);
  }

  function OnkeyPasswordVisibility() {
    setPasswordShown(!passwordShown);
  }
  return (
    <LoginWrap>
      <LoginIlustration />
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Label>E-mail</Label>
        <Input
          type="email"
          placeholder="Digite seu email"
          {...register('email')}
        />
        <Label>Senha</Label>
        <PasswordWrap>
          <Input
            type={passwordShown ? 'text' : 'password'}
            placeholder="digite sua senha"
            {...register('password')}
          />
          <i
            onClick={togglePasswordVisibility}
            onKeyPress={OnkeyPasswordVisibility}
            role="button"
            tabIndex={0}
          >
            {passwordShown ? (
              <BsEye color="#999392" size={17} />
            ) : (
              <BsEyeSlash color="#999392" size={17} />
            )}
          </i>
        </PasswordWrap>
        <Button type="submit" marginTop={68}>
          Entrar
        </Button>
      </FormContainer>
    </LoginWrap>
  );
});
