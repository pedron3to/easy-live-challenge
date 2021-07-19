import { connect } from 'react-redux';

import { Product } from '../../components/Product';
import { addToCart } from '../../redux/actions/productActions';

function ProductDetail({ current, addToCart }) {
  return (
    <>
      <Product
        title={current.title}
        id={current.id}
        description={current.details}
        image={current.img}
        price={current.price}
        addToCart={() => addToCart(current.id)}
      />
    </>
  );
}
const mapStateToProps = state => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
