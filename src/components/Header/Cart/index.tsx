import { useState } from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import { Link } from 'react-router-dom';

import { Container, CounterCart } from './styles';

export function Cart() {
  const [cartCount, setCartCount] = useState(2);
  return (
    <Link to="/checkout">
      <Container>
        <GiShoppingCart size={24} color="#838383" />
        <CounterCart>{cartCount}</CounterCart>
      </Container>
    </Link>
  );
}
