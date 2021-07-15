import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ProductCard } from '../../components/ProductCard';
import { setProducts } from '../../redux/actions/productActions';
import { Container, ProductSection, Title } from './styles';

function Catalog() {
  const products = useSelector(state => state.allProducts.products);

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get('https://fakestoreapi.com/products');
      dispatch(setProducts(data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderList = products.map(product => {
    const { id, price, image, title } = product;
    return (
      <ProductCard key={id} price={price} title={title} src={image} id={id} />
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
