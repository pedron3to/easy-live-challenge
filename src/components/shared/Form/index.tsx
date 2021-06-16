import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

import { Context } from '../../../Context/AuthContext';
import { Button } from '../Button';
import { FormContainer, Label, Input, PasswordWrap } from './styles';

export function Form() {
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
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Label>E-mail</Label>
      <Input
        type="email"
        placeholder="Digite seu email"
        {...register('email')}
      />
      <Label>
        Senha
        <i>
          <AiOutlineQuestionCircle color="#999392" size={17} />
        </i>
      </Label>
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
      <Button type="submit" variant="">
        Entrar
      </Button>
    </FormContainer>
  );
}
