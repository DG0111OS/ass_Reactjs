import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import _ from 'lodash';
import {Link} from "react-router-dom";

export default function AllProduct() {

    const products = useSelector(state => state.products);

    const [countProduct, setCountProduct] = useState(10);

    const showAllProduct = (count) => {
        return _.map(products,({name,image,price,id},index) => {
            if(index < count) {
                return(
                    <div className="col-md-3">
                        <div className="item">
                            <Link to={`product/${id}`}>
                                <img src={image} alt="img" />
                                <h3><a href="#">{name}</a></h3>
                            </Link>
                            <h6><span className="price">${price}</span> / <Link to={`product/${id}`}>Buy Now</Link></h6>
                        </div>
                    </div>
                )
            }
        })
    }

    return(
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
                                {showAllProduct(countProduct)}
                            </div>
                            <div className="btn-sec">
                                <button onClick={() => setCountProduct(countProduct + 10)} className="btn gray-btn">Xem thêm sản phẩm</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

