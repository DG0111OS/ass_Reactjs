import React from 'react';
import ReactDOM from "react-dom";
import SideBar from "./components/SideBar/SideBar";
import Navbar from "./components/Navbar/Navbar";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Routes from './routes';

import { Provider } from 'react-redux'

import store from "./store";

export default function AppModule() {

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
