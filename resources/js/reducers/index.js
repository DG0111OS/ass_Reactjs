import { combineReducers } from 'redux';
import products from "./products.js";
import categories from "./categories";
import posts from "./posts";
import cart from "./cart";

// reducers/index.js (ROOT)
const rootReducer = combineReducers({
    products: products,
    categories: categories,
    cart: cart,
    posts: posts,
});

export default rootReducer;
