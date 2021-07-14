import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectedProducts } from '../../redux/actions/productActions';

function ProductDetail() {
  const product = useSelector(state => state.product);

  const { productId } = useParams();

  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`,
      );
      console.log(response);
      dispatch(selectedProducts(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (productId && productId !== '') fetchProductDetail();
  }, [productId]);

  console.log(product);

  return <div>adsdas</div>;
}

export default ProductDetail;
