import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button } from '../../components/shared/Button';
import {
  adjustItemQty,
  removeFromCart,
} from '../../redux/actions/productActions';
import ProductRow from './ProductRow.js';
import {
  Table,
  Thead,
  TrHead,
  ThProduct,
  ThTotal,
  Tbody,
  Th,
  SummaryContainer,
  TotalSummaryContainer,
  ButtonsContainer,
  Container,
} from './styles';

function Checkout({ cart }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach(item => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <Container>
      <Table>
        <Thead>
          <TrHead>
            <ThProduct>Product</ThProduct>
            <Th>Price</Th>
            <Th>Amount</Th>
            <ThTotal>Total</ThTotal>
          </TrHead>
        </Thead>
        <Tbody>
          {cart.map(item => (
            <ProductRow key={item.id} item={item} />
          ))}
        </Tbody>
      </Table>
      <SummaryContainer>
        <TotalSummaryContainer>
          Total: <h4>${totalPrice.toFixed(2)}</h4>
        </TotalSummaryContainer>
        <ButtonsContainer>
          <Button type="button" variant="outlined">
            Proceed To Checkout
          </Button>
          <Link to="/catalog">
            <Button type="button">Continue to Shopping</Button>
          </Link>
        </ButtonsContainer>
      </SummaryContainer>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.shop.cart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: id => dispatch(removeFromCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
