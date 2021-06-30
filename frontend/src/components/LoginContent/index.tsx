import { forwardRef } from 'react';

import { BoxFrameIllustration } from './BoxFrameIllustration';
import { Form } from './Form';
import { LoginWrap } from './styles';

export const LoginContent = forwardRef(() => {
  return (
    <LoginWrap>
      <BoxFrameIllustration />
      <Form />
    </LoginWrap>
  );
});
