import { ActionTypes } from '../constants/action-types';

export function setProducts(products: any) {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
}

export function selectedProducts(product: any) {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
}
