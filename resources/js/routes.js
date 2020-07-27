import React from "react";

import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";
import ListProduct from "./pages/ProductPage/ListProduct";
import EditProduct from "./pages/ProductPage/EditProduct";
import AddProduct from "./pages/ProductPage/AddProduct";

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/product',
        exact: true,
        main: () => <ListProduct />
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({match}) => <EditProduct match={match} />
    },
    {
        path: '/product/add',
        exact: false,
        main: () => <AddProduct />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;
