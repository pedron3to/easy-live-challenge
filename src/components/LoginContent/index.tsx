import { forwardRef } from 'react';

import { Form } from '../shared/Form';
import { BoxFrameIllustration } from './BoxFrameIllustration';
import { LoginWrap } from './styles';

export const LoginContent = forwardRef(() => {
  return (
    <LoginWrap>
      <BoxFrameIllustration />
      <Form />
    </LoginWrap>
  );
});
