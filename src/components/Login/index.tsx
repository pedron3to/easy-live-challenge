import { forwardRef } from 'react';

import { Form } from '../shared/Form';
import { LoginIlustration } from './LoginIlustration';
import { LoginWrap } from './styles';

export const Login = forwardRef(() => {
  return (
    <LoginWrap>
      <LoginIlustration />
      <Form />
    </LoginWrap>
  );
});
