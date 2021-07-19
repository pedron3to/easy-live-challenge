import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import Catalog from './pages/Catalog/index.js';
import Checkout from './pages/Checkout/index.js';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail/index.js';

function Routes({ current }: any) {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/catalog" component={Catalog} />
      {!current ? (
        <Redirect to="/" />
      ) : (
        <Route exact path="/products/:id" component={ProductDetail} />
      )}

      <Route path="/checkout" component={Checkout} />
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(Routes);
