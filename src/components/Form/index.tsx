import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../../Context/AuthContext";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Button } from "../Button/styles";

import { FormContainer, Label, Input, PasswordWrap } from './styles'

export function Form() {
  const { onSubmit } = useContext(Context);
  const [passwordShown, setPasswordShown] = useState(false);
  const { register, handleSubmit } = useForm();

  function togglePasswordVisibility() {
    setPasswordShown(!passwordShown);
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Label>
        E-mail
        <Input
          type="email"
          placeholder="Digite seu email"
          {...register("email")}
        />
      </Label>
      <Label>
        Senha
        <PasswordWrap>
          <Input
            type={passwordShown ? "text" : "password"}
            placeholder="digite sua senha"
            {...register("password")}
          />
          <i onClick={togglePasswordVisibility}>
            {passwordShown ? (
              <BsEye color="#999392" size={17} />
            ) : (
              <BsEyeSlash color="#999392" size={17} />
            )}
          </i>
        </PasswordWrap>
      </Label>
      <Button type="submit" marginTop={68}>
        Entrar
      </Button>
    </FormContainer>
  );
}
