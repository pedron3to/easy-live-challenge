/* import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; */

/* import { useEffect } from 'react'; */
import { connect } from 'react-redux';

import ProductCard from '../../components/ProductCard/index.js';
/* import { fetchProducts, AddToCart } from '../../redux/actions/productActions'; */
import { Container, ProductSection, Title } from './styles';

function Catalog({ products }) {
  /*  const products = useSelector(state => state.allProducts.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []); */
  /*
  useEffect(() => {
    props.getItems();
  }, []);

  const AddToCart = id => {
    props.AddToCart(id);
  }; */

  // eslint-disable-next-line react/destructuring-assignment

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
// shop.products
const mapStateToProps = state => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Catalog);
