import React, {Component, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import swal from 'sweetalert';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


import {useForm} from "react-hook-form";
import _ from "lodash";
import {useDispatch, useSelector} from "react-redux";

import fetchApi from "../../../utils/apiCall";
import firebase from "./../../../firebase/index";
import {allProduct} from "../../../actions/products";

export default function AddProduct() {
    const history = useHistory();
    const {register, handleSubmit, watch, errors} = useForm();
    const cate = useSelector(state => state.categories);
    const dispatch = useDispatch();

    const [description, seTDescription] = useState(null);

    // lay danh sach category
    const showCategories = () => {
        return _.map(cate, ({name, id}, index) => {
            return (
                <option key={index} value={id}>{name}</option>
            )
        })
    }

    // luu san pham
    const onHandleSubmit = (data) => {
        console.log(data.image[0]);
        let file = data.image[0];
        // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                const listData = {
                    ...data,
                    image: url
                }
                console.log(listData);

                fetchApi('product', 'POST', listData).then(({data}) => {
                    swal("Thêm sản phẩm thành công")
                        .then((value) => {
                            history.push('/admin/products');
                            dispatch(allProduct())
                        });
                });
            })
        });

    }

    return (
        <div className="col-md grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Thêm sản phẩm</h4>
                    <p className="card-description">
                        Chúc bạn may mắn
                    </p>
                    <form onSubmit={handleSubmit(onHandleSubmit)} className="forms-sample">
                        <div className="form-group">
                            <label htmlFor="exampleInputUsername1">Danh mục</label>
                            <select ref={register}
                                    className="form-control form-control-lg"
                                    name="category_id">
                                {showCategories()}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputUsername1">Tên sản phẩm</label>
                            <input type="text"
                                   ref={
                                       register({
                                           required: true,
                                           minLength: 5,
                                           pattern: /^[\S][\S]/
                                       })
                                   }
                                   name="name"
                                   className="form-control"
                                   id="exampleInputUsername1"
                                   placeholder="Tên sản phẩm"/>
                            <span className="text-danger">
                                {errors.name?.type === "required" && "Tên sản phẩm không được để trống!"}
                                {errors.name?.type === "minLength" && "Tên sản phẩm ít nhất 5 ký tự!"}
                                {errors.name?.type === "pattern" && "Tên sản phẩm không thể chỉ là khoảng trắng!"}
                            </span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputUsername1">URL Hình ảnh sản phẩm</label>
                            <input type="file"
                                   ref={register({
                                       required: true,
                                   })}
                                   name="image"
                                   className="form-control"
                                   id="exampleInputUsername1"
                                   placeholder="Đường dẫn ảnh sản phẩm"/>
                            <span className="text-danger">
                                    {errors.image && "File không đúng"}
                            </span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputUsername1">Thông tin chi tiết sản phẩm</label>
                            <CKEditor
                                editor={ClassicEditor}
                                data=""
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    seTDescription(data);
                                }}
                            />
                            <span className="text-danger">
                                    {errors.description && "Sai description"}
                            </span>

                            <input
                                ref={register({
                                    required: true,
                                    minLength: 8,
                                })}
                                name='description'
                                value={description}
                                type="text" hidden/>
                        </div>


                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Giá sản phẩm</label>
                            <input type="number"
                                   ref={register({
                                       required: true,
                                       min: 1,
                                       pattern: /^(0|[1-9][0-9]*)$/
                                   })}
                                   name="price"
                                   className="form-control"
                                   id="exampleInputEmail1"
                                   placeholder="Giá sản phẩm"/>
                            <span className="text-danger">
                                {errors.price?.type === "required" && "Giá sản phẩm không được để trống!"}
                                {errors.price?.type === "min" && "Giá sản phẩm ít nhất bằng 1!"}
                                {errors.price?.type === "pattern" && "Giá sản phẩm phải là số"}
                        </span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputConfirmPassword1">Số lượng sản phẩm</label>
                            <input type="number"
                                   ref={register({
                                       required: true,
                                       min: 0,
                                       pattern: /^(0|[1-9][0-9]*)$/
                                   })}
                                   name="quantity"
                                   className="form-control"
                                   id="exampleInputConfirmPassword1"
                                   placeholder="Số lượng sản phẩm"/>
                            <span className="text-danger">
                                {errors.quantity?.type === "required" && "Số lượng sản phẩm không được để trống!"}
                                {errors.quantity?.type === "min" && "Số lượng sản phẩm ít nhất bằng 1!"}
                                {errors.quantity?.type === "pattern" && "Số lượng sản phẩm phải là số"}
                            </span>
                        </div>


                        <button type="submit" className="btn btn-gradient-primary mr-2">Thêm sản phẩm</button>
                        <Link to="/product" className="btn btn-light">Quay Lại</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
