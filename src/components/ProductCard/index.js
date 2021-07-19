/* eslint-disable no-underscore-dangle */
import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addToCart, loadCurrentItem } from '../../redux/actions/productActions';
import { Button } from '../shared/Button';
import { Container, Image, Title, Price, ButtonContainer } from './styles';

function ProductCard({ product, addToCart, loadCurrentItem }) {
  const [style, setStyle] = useState(false);

  return (
    <Container
      onMouseEnter={() => {
        setStyle(true);
      }}
      onMouseLeave={() => {
        setStyle(false);
      }}
    >
      <Link
        to={`/products/${product.id}`}
        onClick={() => loadCurrentItem(product)}
      >
        <Image
          style={{
            backgroundImage: `url(${product.img})`,
          }}
        />
        <Title>{product.title}</Title>
        <Price>$ {product.price}</Price>
      </Link>
      <ButtonContainer>
        {style ? (
          <Button marginTop={10} onClick={() => addToCart(product.id)}>
            Add to Cart
          </Button>
        ) : null}
      </ButtonContainer>
    </Container>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => dispatch(addToCart(id)),
    loadCurrentItem: item => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(ProductCard);
