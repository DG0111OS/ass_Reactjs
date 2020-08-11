import React, {useEffect} from 'react';
import ReactDOM from "react-dom";

import Routes from './routes';

import {Provider, useDispatch, useSelector} from 'react-redux'
import store from "./store";
import {categoryAllResquest} from "./actions/categories";
import {allProduct} from "./actions/products";
import {allPosts} from "./actions/posts";

export default function AppModule() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(categoryAllResquest());
        dispatch(allProduct())
        dispatch(allPosts())
    }, [])

    return (
        <div>
            <Routes></Routes>
        </div>
    )
}

if (document.getElementById('appModule')) {
    ReactDOM.render (
        <Provider store={store}>
            <AppModule/>
        </Provider>
    , document.getElementById('appModule')
    );
}
