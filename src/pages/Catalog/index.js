import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ProductCard } from '../../components/ProductCard';
import { fetchProducts, AddtoCart } from '../../redux/actions/productActions';
import { Container, ProductSection, Title } from './styles';

function Catalog() {
  const products = useSelector(state => state.allProducts.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const renderList = products.map(product => {
    const { id, price, image, title } = product;
    return (
      <ProductCard
        key={id}
        price={price}
        title={title}
        src={image}
        id={id}
        AddtoCart={dispatch(AddtoCart)}
      />
    );
  });

  return (
    <Container>
      <Title>All PRODUCTS</Title>
      <ProductSection>{renderList}</ProductSection>
    </Container>
  );
}

export default Catalog;
