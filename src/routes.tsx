import { Route } from 'react-router-dom';

import Catalog from './pages/Catalog';
import Checkout from './pages/Checkout';
import Home from './pages/Home';

export default function Routes() {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/checkout" component={Checkout} />
    </>
  );
}
