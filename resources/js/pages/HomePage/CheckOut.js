import React from "react";
import {Link} from "react-router-dom";
import './css/checkOut.scss';
import _ from 'lodash';
import {useDispatch, useSelector} from "react-redux";
import {deleteCart, updateCart} from "../../actions/cart";

export default function CheckOut() {
    const cart = useSelector(state => state.cart);
    const cate = useSelector(state => state.categories);
    const dispatch = useDispatch();

    const showCart = () => {
        if (cart.total === 0) {
            return (
                <div>
                    Chưa có sản phẩm nào
                </div>
            )
        } else {
            return _.map(cart.cart, ({id, name, price, image, quantity, category_id}, index) => {
                return (
                    <div key={index} className="row border-top border-bottom">
                        <div className="row main align-items-center">
                            <div className="col-2">
                                <img className="img-fluid" src={image}/></div>
                            <div className="col">
                                <div className="row text-muted"></div>
                                <div className="row">{name}</div>
                            </div>
                            <div className="col">
                                <button
                                    className="btnCart"
                                    onClick={() => dispatch(updateCart(id, -1))}>
                                    -
                                </button>
                                <span className="border mx-3 btnCart">
                                {quantity}
                            </span>
                                <button className="btnCart"
                                        onClick={() => dispatch(updateCart(id, 1))}>
                                    +
                                </button>
                            </div>
                            <div className="col">$ {price * quantity}
                                <span onClick={() => dispatch(deleteCart(id))} className="close">✕</span>
                            </div>
                        </div>
                    </div>
                )
            })
        }

    }

    return (
        <div id='checkOut'>
            <div className="breadcrumb">
                <div className="container">
                    <Link className="breadcrumb-item" to='/'>Home</Link>
                    <span className="breadcrumb-item active">1111</span>
                </div>
            </div>
            <section className="product-sec">
                <div className="container">
                    <div className="card">
                        <div className="row">
                            <div className="col-md-8 cart">

                                <div className="title">
                                    <div className="row">
                                        <div className="col">
                                            <h4><b>Shopping Cart</b></h4>
                                        </div>
                                        <div className="col align-self-center text-right text-muted">3 items</div>
                                    </div>
                                </div>
                                {showCart()}
                                <div className="back-to-shop">
                                    <Link to='/'>←<span
                                        className="text-muted">Back to shop</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 summary">
                                <div>
                                    <h5><b>Thanh toán</b></h5>
                                </div>
                                <div className="row" style={{borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0'}}>
                                    <div className="col">Tổng tiền</div>
                                    <div className="col text-right">$ {cart.total}</div>
                                </div>
                                <button className="btn">CHECKOUT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
