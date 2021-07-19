/* import fakeStoreApi from '../../apis/fakeStoreApi.js'; */
import * as actionTypes from '../constants/action-types';

/* export function fetchProducts() {
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
 */
export const addToCart = (itemID: any) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID: any) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID: any, qty: any) => {
  return {
    type: actionTypes.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const loadCurrentItem = (item: any) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
