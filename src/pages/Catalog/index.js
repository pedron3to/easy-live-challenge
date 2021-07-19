import { connect } from 'react-redux';

import ProductCard from '../../components/ProductCard/index.js';
import { Container, Title, ProductSection } from './styles';

function Catalog({ products }) {
  const renderList = products.map(product => {
    return <ProductCard key={product.id} product={product} />;
  });

  return (
    <Container>
      <Title>All PRODUCTS</Title>
      <ProductSection>{renderList}</ProductSection>
    </Container>
  );
}
const mapStateToProps = state => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Catalog);
