import React from "react";

import {deleteCategoryResquest} from "../../../actions/categories";
import {useDispatch, useSelector} from "react-redux";

import _ from 'lodash';
import {Link} from "react-router-dom";

import {FaPencilAlt, FaTrashAlt} from "react-icons/fa";
import swal from "sweetalert";

import {deleteProductResquest} from "../../../actions/products";

export default function ListCate() {

    const cate = useSelector(state => state.categories);

    const dispatch = useDispatch();

    const showCate = () => {
        return _.map(cate, ({name,id}, index) => {
            return (
                <tr key={index}>
                    <th>{name}</th>
                    <th>
                        <Link to={`category/${id}`} className="btn">
                            <FaPencilAlt/>
                        </Link>
                        <button onClick={() => distroyCate(id)} className="btn">
                            <FaTrashAlt/>
                        </button>
                    </th>
                </tr>
            )
        })
    }

    // xoa san pham

    const distroyCate = (id) => {
        swal({
            title: "Bạn có muốn xóa không?",
            text: "Khi bạn xóa là sẽ không còn lưu lại đâu nhé",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    dispatch(deleteCategoryResquest(id));
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
                    <h4 className="card-title">Danh sách danh mục</h4>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {showCate()}
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
    )
}
