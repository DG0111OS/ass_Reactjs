import React from "react";
import {useDispatch, useSelector} from "react-redux";
import _ from 'lodash';

import {Link} from 'react-router-dom';

export default function HomePage() {

    const product = useSelector(state => state.products);
    const dispatch = useDispatch();

    const showProductNew = () => {
        return  _.map(product,({name,image,price,id},index) => {
            if(index < 10) {
                return(
                    <div key={index} className="col-lg-2 col-md-3 col-sm-4">
                        <div className="item">
                            <Link className='link' to={`product/${id}`}>
                                <img src={image} alt="img"/>
                                <h3>{name}</h3>
                            </Link>
                            <h6><span className="price">${price}</span> / <Link to={`/product/${id}`}>Buy Now</Link></h6>
                        </div>
                    </div>
                )
            }
        })
    }

    return (
        <section className="recent-book-sec">
            <div className="container">
                <div className="title">
                    <h2>Danh sách sản phẩm mới nhất</h2>
                    <hr/>
                </div>
                <div className="row">
                    {showProductNew()}
                </div>
                <div className="btn-sec">
                    <Link to='/product' className="btn gray-btn">Xem tất cả sách</Link>
                </div>
            </div>
        </section>

    )
}
