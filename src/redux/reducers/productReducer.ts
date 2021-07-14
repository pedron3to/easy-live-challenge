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

export function SelectedProductReducer(state = {}, { type, payload }: any) {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
      break;

    default:
      return state;
  }
}
