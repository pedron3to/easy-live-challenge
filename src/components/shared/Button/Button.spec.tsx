import { render, screen } from '@testing-library/react';

import { Button } from './index';

describe('Button component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button>button</Button>);

    screen.logTestingPlaygroundURL();

    expect(screen.getByText('button')).toBeInTheDocument();
  });
});
