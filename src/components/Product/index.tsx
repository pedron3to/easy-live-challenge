import { Button } from '../shared/Button';
import {
  Container,
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
}

export function Product({
  title,
  price,
  image,
  id,
  description,
}: ProductProps) {
  return (
    <Container>
      <ProductImage
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <ProductInfo>
        <Code>Product Code: {id} </Code>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>$ {price}</Price>
        <Button marginTop={44}>Add to Cart</Button>
      </ProductInfo>
    </Container>
  );
}
