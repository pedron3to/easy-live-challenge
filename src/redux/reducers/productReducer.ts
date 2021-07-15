import { ActionTypes } from '../constants/action-types';

const initialState = {
  products: [],
};

export function productReducer(
  state: any = initialState,
  { type, payload }: any,
) {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
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

export function shopReducer(state: any, { type, payload }: any) {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      return { ...state, ...payload };

    default:
      return state;
  }
}
