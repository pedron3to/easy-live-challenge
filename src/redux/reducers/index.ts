import { combineReducers } from 'redux';

/* import { productReducer, selectedProductReducer } from './productReducer'; */
import shopReducer from './shopReducer.js';

const rootReducers = combineReducers({
  shop: shopReducer,
  /* allProducts: productReducer,
  product: selectedProductReducer, */
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
