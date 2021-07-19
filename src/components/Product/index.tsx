import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Button } from '../shared/Button';
import {
  ProductImage,
  ProductInfo,
  Code,
  Title,
  Description,
  Price,
} from './styles';

interface ProductProps {
  title: string;
  price: number;
  image: string;
  id: string;
  description: string;
  addToCart: () => void;
}

const Container = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 110px 0;

  @media screen and (max-width: 970px) {
    flex-direction: column;
    margin: 80px 0;
  }

  @media screen and (max-width: 575px) {
    margin-top: 2rem;
  }
`;

export function Product({
  title,
  price,
  image,
  id,
  description,
  addToCart,
}: ProductProps) {
  return (
    <Container initial="exit" animate="enter" exit="exit">
      <ProductImage
        style={{
          backgroundImage: `url(/${image})`,
        }}
      />
      <ProductInfo>
        <Code>Product Code: {id} </Code>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>$ {price}</Price>
        <Button onClick={addToCart}>Add to Cart</Button>
      </ProductInfo>
    </Container>
  );
}
