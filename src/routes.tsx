import { AnimatePresence } from 'framer-motion';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import Catalog from './pages/Catalog/index.js';
import Checkout from './pages/Checkout/index.js';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail/index.js';

function Routes({ current }: any) {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Route path="/" exact component={Home} />
      <Route path="/catalog" component={Catalog} />
      {!current ? (
        <Redirect to="/" />
      ) : (
        <Route exact path="/products/:id" component={ProductDetail} />
      )}

      <Route path="/checkout" component={Checkout} />
    </AnimatePresence>
  );
}

const mapStateToProps = (state: any) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(Routes);
