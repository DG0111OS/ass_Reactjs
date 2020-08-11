import React, {useState, useEffect} from "react";
import _ from "lodash";
import swal from 'sweetalert';
import {FaPencilAlt, FaTrashAlt} from "react-icons/fa";

import {listProducts, deleteProductResquest, allProduct} from '../../../actions/products';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import {useDispatch, useSelector} from "react-redux";

export default function ListProduct() {

    const product = useSelector(state => state.products);
    const dispatch = useDispatch();
    //Hien thi danh sach san pham
    const showProduct = () => {
        return _.map(product, ({id, name, price, image, quantity, status, nameCate}, index) => {
                return (
                    <tr key={index}>
                        <th>{name}</th>
                        <th>{nameCate}</th>
                        <th>{price} $</th>
                        <th>{quantity}</th>
                        <th><img src={image} alt=""/></th>
                        <th>
                            <Link to={`product/${id}`} className="btn">
                                <FaPencilAlt/>
                            </Link>
                            <button onClick={() => destroyProduct(id)} className="btn">
                                <FaTrashAlt/>
                            </button>
                        </th>
                    </tr>
                )
        })
    }
    // xoa san pham le.
    const destroyProduct = (id) => {
        swal({
            title: "Bạn có muốn xóa không?",
            text: "Khi bạn xóa là sẽ không còn lưu lại đâu nhé",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    dispatch(deleteProductResquest(id));
                    swal("Xóa thành công rồi nhé", {
                        icon: "success",
                    });
                } else {
                    swal("Biết điểm dừng là tốt đấy!");
                }
            });
    }

    const search = (e) => {
        const key = e.target.value;
        if (key !== '') {
            let productFilter = _.filter(product, (value, index) => {
                let matches = value.name.indexOf(key) >= 0 ? true : false;
                if (matches) {
                    return value;
                }
            })
            console.log(productFilter)
        }
    }
        return (
            <div className="col-12 grid-margin">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <input onChange={search} type='text' className='form-control' placeholder='Tìm kiếm'/>
                        </h4>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>price</th>
                                    <th>Category</th>
                                    <th>quantity</th>
                                    <th>image</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                {showProduct()}
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
