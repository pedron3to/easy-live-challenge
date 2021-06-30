import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { ButtonLogOut } from './index';

describe('Button component', () => {
  it('should render correctly and should be Accessible to Everyone', () => {
    render(<ButtonLogOut />);

    expect(screen.getByRole('button', { name: /sair/i }));
  });
});
