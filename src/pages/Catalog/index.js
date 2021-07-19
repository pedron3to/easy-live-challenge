import { motion } from 'framer-motion';
import { connect } from 'react-redux';
import styled from 'styled-components';

import ProductCard from '../../components/ProductCard/index.js';
import { Container, Title } from './styles';

function Catalog({ products }) {
  const renderList = products.map(product => {
    return <ProductCard key={product.id} product={product} />;
  });

  const ProductSection = styled(motion.div)`
    display: grid;
    width: 100%;

    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media screen and (max-width: 1220px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 990px) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 750px) {
      grid-template-columns: 1fr;
    }
  `;

  return (
    <Container>
      <Title>All PRODUCTS</Title>
      <ProductSection
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
      >
        {renderList}
      </ProductSection>
    </Container>
  );
}
const mapStateToProps = state => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Catalog);
