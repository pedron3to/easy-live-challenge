/* eslint-disable no-underscore-dangle */
import { motion } from 'framer-motion';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { addToCart, loadCurrentItem } from '../../redux/actions/productActions';
import { Button } from '../shared/Button';
import { Title, Price, ButtonContainer } from './styles';

const Image = styled(motion.div)`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const Container = styled(motion.div)`
  height: 480px;
  padding: 2rem;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow};
  }

  @media screen and (max-width: 750px) {
    margin: 0 20%;
  }

  @media screen and (max-width: 575px) {
    margin: 0 10%;
  }
`;

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition },
  },
};

const imageVariants = {
  hover: { scale: 1.1 },
};

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
      variants={thumbnailVariants}
    >
      <Link
        to={`/products/${product.id}`}
        onClick={() => loadCurrentItem(product)}
      >
        <Image
          style={{
            backgroundImage: `url(${product.img})`,
          }}
          variants={imageVariants}
          transition={transition}
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
