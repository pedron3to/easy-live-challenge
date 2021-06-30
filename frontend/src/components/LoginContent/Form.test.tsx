import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { Form } from './Form';

describe('Form component', () => {
  beforeEach(() => {
    render(<Form />);
  });

  it('should display required error when value is invalid', async () => {
    fireEvent.submit(screen.getByText('Entrar'));
    expect(await screen.findAllByRole('alert')).toHaveLength(2);
  });
});
