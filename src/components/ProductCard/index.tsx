import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button } from '../shared/Button';
import { Container, Image, Title, Price, ButtonContainer } from './styles';

interface ProductCardProps {
  title: string;
  price: number;
  src: string;
  id: number;
  addToCart: () => void;
}

export function ProductCard({
  price,
  title,
  src,
  id,
  addToCart,
}: ProductCardProps) {
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
      <Link to={`/products/${id}`}>
        <Image
          style={{
            backgroundImage: `url(${src})`,
          }}
        />
        <Title>{title.length > 45 ? title.substring(0, 45) : title}</Title>
        <Price>$ {price}</Price>
      </Link>
      <ButtonContainer>
        {style ? (
          <Button
            marginTop={10}
            onClick={() => {
              addToCart;
            }}
          >
            Add to Cart
          </Button>
        ) : null}
      </ButtonContainer>
    </Container>
  );
}
