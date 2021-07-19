import { combineReducers } from 'redux';

import shopReducer from './shopReducer.js';

const rootReducers = combineReducers({ shop: shopReducer });

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
