import finn from '../../assets/finn-juhl.png';
import wegner from '../../assets/wegner-chair.png';
import { Product } from '../../components/Product';
import { Container, ProductSection, Title } from './styles';

function Catalog() {
  return (
    <Container>
      <Title>All PRODUCTS</Title>
      <ProductSection>
        <Product
          heightPx="280px"
          widthPx="300px"
          price={49.99}
          title="Wegner CH825 Credenza"
          src={wegner}
        />
        <Product
          heightPx="580px"
          widthPx="300px"
          price={125.99}
          title="Finn Juhl France Chair"
          src={finn}
        />
        <Product
          heightPx="280px"
          widthPx="300px"
          price={49.99}
          title="Wegner CH825 Credenza"
          src={wegner}
        />
      </ProductSection>
    </Container>
  );
}

export default Catalog;
