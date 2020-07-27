import { combineReducers } from 'redux';
import products from "./products.js";

// reducers/index.js (ROOT)
const rootReducer = combineReducers({
    products: products,
});

export default rootReducer;
