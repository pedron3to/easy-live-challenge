import { Container, Image, Title, Price } from './styles';

interface ProductProps {
  title: string;
  price: number;
  widthPx: string;
  heightPx: string;
  src: string;
}

export function Product({
  price,
  heightPx,
  title,
  widthPx,
  src,
}: ProductProps) {
  return (
    <Container>
      <Image
        style={{
          width: heightPx,
          height: widthPx,
          backgroundImage: `url(${src})`,
        }}
      />
      <Title>{title}</Title>
      <Price>$ {price}</Price>
    </Container>
  );
}
