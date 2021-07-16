import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Product } from '../../components/Product';
import {
  fetchProduct,
  removeSelectedProducts,
} from '../../redux/actions/productActions';

function ProductDetail() {
  const product = useSelector(state => state.product);

  const { title, price, description, image, id } = product;

  const { productId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== '') {
      dispatch(fetchProduct(productId));
    }
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, []);

  console.log(product);

  return (
    <>
      {Object.keys(product).length === 0 ? (
        <div>...loading</div>
      ) : (
        <Product
          title={title}
          id={id}
          description={description}
          image={image}
          price={price}
        />
      )}
    </>
  );
}

export default ProductDetail;
