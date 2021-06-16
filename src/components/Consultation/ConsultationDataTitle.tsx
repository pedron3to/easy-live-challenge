import { ReactNode } from 'react';

import { ConsultationDataTitleContainer } from './styles';

interface ConsultationDataTitleProps {
  children: ReactNode;
}

export function ConsultationDataTitle({
  children,
}: ConsultationDataTitleProps) {
  return (
    <ConsultationDataTitleContainer>
      <h6>{children}</h6>
    </ConsultationDataTitleContainer>
  );
}
