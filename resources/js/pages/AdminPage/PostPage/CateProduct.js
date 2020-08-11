import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import _ from 'lodash';
import {Link, useParams} from "react-router-dom";

export default function CateProduct() {

    let params = useParams();

    const pro = useSelector(state => state.products);

    const showAllProduct = () => {

        const productsInCate = _.filter(pro, ({category_id}) => {
            return category_id == params.id;
        })
        if(productsInCate.length < 1) {
            return (
                <div>
                    <h1>Không có sản phẩm nào hiện tại</h1>
                </div>
            )
        } else {
            return _.map(productsInCate, ({name, image, price, id, category_id}, index) => {
                return (
                    <div key={index} className="col-md-3">
                        <div className="item">
                            <Link to={`/product/${id}`}>
                                <img src={image} alt="img"/>
                                <h3><a href="#">{name}</a></h3>
                            </Link>
                            <h6><span className="price">${price}</span> / <Link to={`/product/${id}`}>Buy Now</Link>
                            </h6>
                        </div>
                    </div>
                )
            })
        }
    }

    return (
        <div>
            <div>
                <div className="breadcrumb">
                    <div className="container">
                        <a className="breadcrumb-item" href="index.html">Trang chủ</a>
                        <span className="breadcrumb-item active">Cửa hàng</span>
                    </div>
                </div>
                <section className="static about-sec">
                    <div className="container">
                        <h2>Sản phẩm mới nhất</h2>
                        <div className="recent-book-sec">
                            <div className="row">
                                {showAllProduct()}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

