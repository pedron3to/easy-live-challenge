import { connect } from 'react-redux';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import Cart from './pages/Cart/index.js';
import Catalog from './pages/Catalog/index.js';
import ProductDetail from './pages/ProductDetail/index.js';

function Routes({ current }) {
  const location = useLocation();

  const transtitions = useTransition(location, {
    from: {
      opacity: 0,
      transform: 'translateY(100px)',
      position: 'relative',
      width: '100%',
      zindex: '1',
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0px)',
      position: 'relative',
      width: '100%',
      zindex: '1',
    },
    leave: {
      opacity: 0,
      transform: 'translateY(100px)',
      position: 'relative',
      width: '100%',
      zindex: '1',
    },
    delay: 500,
  });

  return transtitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Route path="/" exact component={Catalog} />
        {!current ? (
          <Redirect to="/" />
        ) : (
          <Route exact path="/products/:id" component={ProductDetail} />
        )}

        <Route path="/checkout" component={Cart} />
      </Switch>
    </animated.div>
  ));
}

const mapStateToProps = state => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(Routes);
