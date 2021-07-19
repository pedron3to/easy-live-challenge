/* eslint-disable no-param-reassign */
import * as actionTypes from '../constants/action-types';

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      img: 'images/im1.png',
      title: 'Red t-shirt',
      price: 99.99,
      details:
        'Red t-shirt 2020 is the newest trend and design from the company with best materials.It provides the best feeling for your body and and your health',
    },

    {
      id: 2,
      img: 'images/im2.png',
      title: 'Pink t-shirt',
      price: 11.99,
      details:
        'Pink t-shirt with a very nice outfit and design. This model provides you a cool fit of your body and are suitable for every occasion',
    },

    {
      id: 3,
      img: 'images/im3.png',
      title: 'White t-shirt',
      price: 64.99,
      details:
        'White t-shirt for every occasions. This shirt is suitable for every occasion.You will surely feel confortable',
    },

    {
      id: 4,
      img: 'images/im4.png',
      title: 'purple t-shirt',
      price: 12.99,
      details:
        'purple t-shirt for every  ocassions which has to do with  sports or walks. Very good fit and feeling for your bodyy.',
    },

    {
      id: 5,
      img: 'images/im5.png',
      title: 'women white t-shirt',
      price: 49.99,
      details:
        'This t-shirts has been created from the best materials and provides you a good feeling for your body. Are good for every occasions.',
    },

    {
      id: 6,
      img: 'images/im6.png',
      title: 'blue t-shirt',
      price: 66.99,
      details:
        'This blue t-shirts has been created from the best materials and provides you a good feeling for your body. Are good for every occasions.',
    },

    {
      id: 7,
      img: 'images/im7.png',
      title: 'blue Hoodie',
      price: 42.99,
      details:
        'blue Hoodie is interesting  model from the company. It is very nice for your body and surelly you will not regret your choice.',
    },

    {
      id: 8,
      img: 'images/im8.png',
      title: 'bob marley shoes',
      price: 55.99,
      details:
        'Bob marley shoes is aspecial design shoes in the memory of the the famous shnger who made a lot of cool songs.This shoes provides you a good feeling of your foots.',
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      // Great Item data from products array
      const item = state.products.find(
        product => product.id === action.payload.id,
      );
      // Check if Item is in cart already
      const inCart = state.cart.find(item => item.id === action.payload.id);

      return {
        ...state,
        cart: inCart
          ? state.cart.map(item =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item,
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item,
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
