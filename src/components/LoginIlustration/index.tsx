import { ImageWrap, LoginIlustrationWrap, TextWrap } from "./styles";
import LoginImage from '../../assets/login2.svg'
import Decoration from '../../assets/decoration.svg'
import React from "react";

export function LoginIlustration() {
  return (
    <LoginIlustrationWrap>

      <TextWrap>
        <h1>Faça Login</h1>
      </TextWrap>

      <ImageWrap>
        <img src={Decoration} alt='imagem decorativa' />
        <img src={LoginImage} alt='Imagem do Login' />
      </ImageWrap>

    </LoginIlustrationWrap>
  )
}