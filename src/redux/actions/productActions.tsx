import fakeStoreApi from '../../apis/fakeStoreApi.js';
import { ActionTypes } from '../constants/action-types';

export function fetchProducts() {
  return async (dispatch: any) => {
    const response = await fakeStoreApi.get('/products');

    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
  };
}

export function fetchProduct(id: any) {
  return async (dispatch: any) => {
    const response = await fakeStoreApi.get(`/products/${id}`);

    dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
  };
}

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

export function removeSelectedProducts() {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
}

export const AddtoCart = (id: any) => (dispatch: any) => {
  dispatch({ type: ActionTypes.ADD_ITEMS, payload: id });
};
