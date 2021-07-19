import { useEffect, useState } from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, CounterCart } from './styles';

function Cart({ cart }: any) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item: any) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <Link to="/cart">
      <Container>
        <GiShoppingCart size={24} color="#838383" />
        {cartCount === 0 ? null : <CounterCart>{cartCount}</CounterCart>}
      </Container>
    </Link>
  );
}

const mapStateToProps = (state: any) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
