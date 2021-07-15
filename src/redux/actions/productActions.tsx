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

export function removeSelectedProducts() {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
}

export const addToCart = (itemID: any) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID: any) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID: any, qty: any) => {
  return {
    type: ActionTypes.ADJUST_ITEM_QTD,
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const loadCurrentItem = (item: any) => {
  return {
    type: ActionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
