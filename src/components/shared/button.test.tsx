import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Button } from './Button';

describe('Button component', () => {
  it('should render correctly', () => {
    render(<Button>Example</Button>);

    expect(screen.getByText('Example')).toBeInTheDocument();
  });

  it('should have acessibility', () => {
    render(<Button>Example</Button>);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
