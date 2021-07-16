import { ActionTypes } from '../constants/action-types';

const initialState = {
  products: [],
  cart: [],
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
      // eslint-disable-next-line no-case-declarations
      const item = state.products.find(
        (product: any) => product.id === payload.id,
      );
      // eslint-disable-next-line no-case-declarations
      const inCart = state.cart.find(() => item.id === payload.id);

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item: any) =>
              item.id === payload.id ? { ...item, qty: item.qty + 1 } : item,
            )
          : [...state.cart, { ...item, qty: 1 }],
      };

    default:
      return state;
  }
}
