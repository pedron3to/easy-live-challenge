import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { H2 } from './H2';

test('should render h2 correctly', () => {
  render(<H2>Example</H2>);

  expect(screen.getByText('Example')).toBeInTheDocument();
});
