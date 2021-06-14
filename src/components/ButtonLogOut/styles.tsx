import styled from 'styled-components';

export const OutlinedButton = styled.button`
  padding: 7px 16px 7px 16px;
  border-radius: 6px;
  color: #2e50d4;
  border: 2px solid #2e50d4;

  font-weight: Bold;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 1px;

  background: transparent;

  &:hover {
    filter: brightness(0.7);
  }
`;
