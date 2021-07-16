/* eslint-disable no-case-declarations */
/* eslint-disable prettier/prettier */
import { ActionTypes } from '../constants/action-types';


const initialState = {
  products: [],
  cart: [],
  currentItem: null,
};

export function productReducer(
  state: any = initialState,
  { type, payload }: any,
) {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
}

export function selectedProductReducer(state = {}, { type, payload }: any) {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
}

export function AddtoCart(state = initialState, { type, payload }: any) {
  switch (type) {
    case ActionTypes.ADD_ITEMS:
      const check = state.cart.find((item: any) => item.id === payload);

      if (!check) {
        const items = state.products.filter((item: any) => item.id === payload);

        const itemsCart = [...state.cart, ...items]

        return { ...state, cart: itemsCart }
      }

      return { ...state }

    default:
      return state;
  }
}

