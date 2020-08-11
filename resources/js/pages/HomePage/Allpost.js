import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import _ from 'lodash';
import {Link} from "react-router-dom";

export default function AllProduct() {

    const post = useSelector(state => state.posts);

    const [countPost, setCountPost] = useState(10);

    const showAllPost = (count) => {
        return _.map(post,({id,title,image},index) => {
            if(index < count) {
                return(
                    <div className="col-md-3">
                        <div className="item">
                            <Link to={`/bai-viet/${id}`}>
                                <img src={image} alt="img" />
                                <h3><a href="#">{title}</a></h3>
                            </Link>
                            <h6><Link to={`product/${id}`}>Đọc Ngay</Link></h6>
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
                        <span className="breadcrumb-item active">Bài Viết</span>
                    </div>
                </div>
                <section className="static about-sec">
                    <div className="container">
                        <h2>Tất cả bài viết</h2>
                        <div className="recent-book-sec">
                            <div className="row">
                                {showAllPost(countPost)}
                            </div>
                            <div className="btn-sec">
                                <button onClick={() => setCountPost(countPost + 10)} className="btn gray-btn">Xem thêm bài viết</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

