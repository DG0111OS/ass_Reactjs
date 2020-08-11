import React, {useState, useEffect} from "react";
import _ from "lodash";
import swal from 'sweetalert';
import {FaPencilAlt, FaTrashAlt} from "react-icons/fa";
import {deletePostResquest} from '../../../actions/posts';
import moment from "moment";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";

export default function ListPost() {

    const post = useSelector(state => state.posts);
    const dispatch = useDispatch();

    //Hien thi danh sach san pham
    const showPost = () => {
        return _.map(post, ({id, title, image, created_at}, index) => {
            return (
                <tr key={index}>
                    <th>{title}</th>
                    <th><img src={image} alt=""/></th>
                    <th>{moment(created_at).format('MMM DD YYYY h:mm A')}</th>
                    <th>
                        <Link to={`post/${id}`} className="btn">
                            <FaPencilAlt/>
                        </Link>
                        <button onClick={() => destroyPost(id)} className="btn">
                            <FaTrashAlt/>
                        </button>
                    </th>
                </tr>
            )
        })
    }
    // xoa san pham le.
    const destroyPost = (id) => {
        swal({
            title: "Bạn có muốn xóa không?",
            text: "Khi bạn xóa là sẽ không còn lưu lại đâu nhé",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    dispatch(deletePostResquest(id));
                    swal("Xóa thành công rồi nhé", {
                        icon: "success",
                    });
                } else {
                    swal("Biết điểm dừng là tốt đấy!");
                }
            });
    }


        return (
            <div className="col-12 grid-margin">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <input type='text' className='form-control' placeholder='Tìm kiếm'/>
                        </h4>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Tiểu đề</th>
                                    <th>Hình ảnh</th>
                                    <th>Ngày đăng</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                {showPost()}
                                </tbody>
                            </table>
                        </div>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );

    }
