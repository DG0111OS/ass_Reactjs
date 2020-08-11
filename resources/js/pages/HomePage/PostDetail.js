import React, {useEffect, useState} from "react";

import {useParams, Link} from 'react-router-dom';
import fetchApi from '../../utils/apiCall';
import ReactHtmlParser, {processNodes, convertNodeToElement, htmlparser2} from 'react-html-parser';
import _ from "lodash";
import {useDispatch, useSelector} from "react-redux";
import swal from 'sweetalert';

import {useLocation} from 'react-router-dom'
import {addToCart} from "../../actions/cart";

export default function ProductDetail() {

    const location = useLocation();
    const {id} = useParams();
    const [post, setPost] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {
        fetchApi(`post/${id}`, 'GET', null).then(({data}) => {
            setPost(data);
        })

        // const body = document.querySelector('#appModule');
        // body.scrollIntoView({
        //     behavior: 'smooth'
        // }, 500)

    }, [location]);


    return (
        <div>
            <div>
                <div className="breadcrumb">
                    <div className="container">
                        <Link className="breadcrumb-item" to='/'>Home</Link>
                        <span className="breadcrumb-item active">bài viết</span>
                    </div>
                </div>
                <section className="product-sec">
                    <div className="container">
                        <h1>{post.title}</h1>
                        {ReactHtmlParser(post.content)}
                    </div>
                </section>
                {/*<section className="related-books">*/}
                {/*    <div className="container">*/}
                {/*        <h2>Sản phẩm cùng danh mục</h2>*/}
                {/*        <div className="recomended-sec">*/}
                {/*            <div className="row">*/}
                {/*                {sanPhamCungDanhMuc()}*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
            </div>

        </div>
    )
}
