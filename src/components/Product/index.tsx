import { Container, Image, Title, Price } from './styles';

interface ProductProps {
  title: string;
  price: number;
  src: string;
}

export function Product({ price, title, src }: ProductProps) {
  return (
    <Container>
      <Image
        style={{
          backgroundImage: `url(${src})`,
        }}
      />
      <Title>{title.length > 45 ? title.substring(0, 45) : title}</Title>
      <Price>$ {price}</Price>
    </Container>
  );
}
