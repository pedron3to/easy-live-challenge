import { Link } from 'react-router-dom';

import { Nav } from './styles';

export function Menu() {
  return (
    <Nav>
      <Link to="/catalog">Catalog</Link>
      <Link to="/">Service</Link>
      <Link to="/">Sale</Link>
      <Link to="/">Shipping</Link>
      <Link to="/">Contact</Link>
    </Nav>
  );
}
