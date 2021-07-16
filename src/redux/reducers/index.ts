import { combineReducers } from 'redux';

import { productReducer, selectedProductReducer } from './productReducer';

const rootReducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
