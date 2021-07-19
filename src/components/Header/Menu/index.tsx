import { Link } from 'react-router-dom';

import { Nav } from './styles';

export function Menu() {
  return (
    <Nav>
      <Link to="/">Catalog</Link>
    </Nav>
  );
}
