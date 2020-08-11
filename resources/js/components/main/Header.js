import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import _ from 'lodash';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

export default function Header() {
    const cate = useSelector(state => state.categories);

    const cart = useSelector(start => start.cart);

    console.log(cart);

    const showCate = () => {
        return _.map(cate, ({name, id}, index) => {
            return (
                <li key={index} className="navbar-item">
                    <Link to={`/category/${id}`} className="nav-link">{name}</Link>
                </li>
            )
        })
    }

    return (
        <header>
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <span className="ph-number">Điện thoại: 0973216831</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-menu">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link className="navbar-brand" to="/">
                            BOOKEN
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="navbar-item active">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>

                                {showCate()}

                                <li className="navbar-item">
                                    <Link to='/bai-viet' className="nav-link">Bài Viết</Link>
                                </li>

                                <li className="navbar-item">
                                    <a href="login.html" className="nav-link">Login</a>
                                </li>
                            </ul>
                            <Link to='/check-out'>
                                <div className="cart my-2 my-lg-0">
                                <span>
                                  <i className="fa fa-shopping-cart" aria-hidden="true"/>
                                </span>
                                    <span className="quntity">{_.sumBy(cart.cart, 'quantity')}</span>
                                </div>
                            </Link>
                            <div className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search here..."
                                       aria-label="Search"/>
                                <span className="fa fa-search"/>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
