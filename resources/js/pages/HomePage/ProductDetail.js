import React, {useEffect, useState} from "react";

import {useParams, Link} from 'react-router-dom';
import fetchApi from '../../utils/apiCall';
import ReactHtmlParser, {processNodes, convertNodeToElement, htmlparser2} from 'react-html-parser';
import _ from "lodash";
import {useDispatch, useSelector} from "react-redux";
import swal from 'sweetalert';

import { useLocation } from 'react-router-dom'
import {addToCart} from "../../actions/cart";

export default function ProductDetail() {

    const location = useLocation();
    const {id} = useParams();
    const pro = useSelector(state => state.products);
    const [product, setProduct] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {
        fetchApi(`product/${id}`, 'GET', null).then(({data}) => {
            setProduct(data);
        })

        const body = document.querySelector('#appModule');
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)

    }, [location]);

    const handleClick = (pro) => {
        dispatch(addToCart(pro));
        swal("Thêm sản phẩm thành công", {
            buttons: false,
            timer: 500,
        });
    }


    const sanPhamCungDanhMuc = () => {
        const productsInCate = _.filter(pro, ({category_id}) => {
            return category_id == product.category_id;
        })
        if (productsInCate.length < 1) {
            return (
                <div>
                    <h1>Không có sản phẩm nào hiện tại cùng danh mục</h1>
                </div>
            )
        } else {
            return _.map(productsInCate, ({name, image, price, id, category_id}, index) => {
                if (index < 4) {
                    if(id !== product.id) {
                        return (
                            <div key={index} className="col-lg-3 col-md-6">
                                <div className="item">
                                    <img src={image} alt="img"/>
                                    <h3>{name}</h3>
                                    <h6><span className="price">${price}</span> / <Link to={`/product/${id}`}>Buy Now</Link>
                                    </h6>
                                    <div className="hover">
                                        <Link to={`/product/${id}`}>
                                        <span>
                                        <i className="fa fa-long-arrow-right" aria-hidden="true"/>
                                        </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
            })
        }
    }

    return (
        <div>
            <div>
                <div className="breadcrumb">
                    <div className="container">
                        <Link className="breadcrumb-item" to='/'>Home</Link>
                        <span className="breadcrumb-item active">{product.name}</span>
                    </div>
                </div>
                <section className="product-sec">
                    <div className="container">
                        <h1>{product.name}</h1>
                        <div className="row">
                            <div className="col-md-6 slider-sec">
                                {/* main slider carousel */}
                                <div id="myCarousel" className="carousel slide">
                                    <div className="carousel-inner">
                                        <div className="active item carousel-item" data-slide-number={0}>
                                            <img src={product.image} className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                                {/*/main slider carousel*/}
                            </div>
                            <div className="col-md-6 slider-content">
                                {ReactHtmlParser(product.description)}
                                <ul>
                                    <li>
                                        <span className="name">Giá sản phẩm</span><span className="clm">:</span>
                                        <span className="price final">${product.price}</span>
                                    </li>
                                </ul>
                                <div className="btn-sec">
                                    <button onClick={() => handleClick(product)} className="btn ">Add To cart</button>
                                    <button className="btn black">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="related-books">
                    <div className="container">
                        <h2>Sản phẩm cùng danh mục</h2>
                        <div className="recomended-sec">
                            <div className="row">
                                {sanPhamCungDanhMuc()}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}
