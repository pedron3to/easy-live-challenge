import { Link } from 'react-router-dom';

import { Container } from './styles';

export function Logo() {
  return (
    <Link to="/">
      <Container>EASY LIVE</Container>
    </Link>
  );
}
