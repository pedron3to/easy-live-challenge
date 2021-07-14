import { Route } from 'react-router-dom';

import Catalog from './pages/Catalog/index.js';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

export default function Routes() {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/product/:productId" component={ProductDetail} />
      <Route path="/checkout" component={Checkout} />
    </>
  );
}
