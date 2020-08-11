import React, {useEffect, useState, Component} from "react";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useHistory
} from "react-router-dom";

import _ from 'lodash';

import {useForm} from "react-hook-form";
// su dung form hook
import {useDispatch, useSelector} from "react-redux";

import fetchApi from "../../../utils/apiCall";

import {categoryAllResquest} from "../../../actions/categories";
import firebase from "../../../firebase";
import swal from "sweetalert";
import {allProduct} from "../../../actions/products";

export default function EditProduct() {

    const history = useHistory();

    let {id} = useParams();

    const [product, setProduct] = useState([]);

    const cate = useSelector(state => state.categories);

    const dispatch = useDispatch();

    useEffect(() => {
        fetchApi(`product/${id}/edit`, 'GET', null).then(({data}) => {
            setProduct(data);
        })

        dispatch(categoryAllResquest());
    }, [])

    const {register, handleSubmit, watch, errors} = useForm();

    const [valueInput, setValueInput] = useState({});

    const onhashchange = (e) => {
        const {name, value} = e.target;

        setValueInput({
            ...valueInput, // theme cai mang cũ vào này.
            [name]: value
        })
    }

    const showCategories = (id_cate) => {
        return _.map(cate, ({name, id}, index) => {
            if (id_cate === id) {
                return <option key={index} selected value={id}>{name}</option>
            } else {
                return <option key={index} value={id}>{name}</option>
            }
        })
    }

    const onHandleSubmit = (data) => {
        let file = data.image[0];
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                const listData = {
                    ...data,
                    image: url
                }
                fetchApi(`product/${id}`, 'PUT', listData).then(({data}) => {
                    swal("Sửa sản phẩm thành công")
                        .then((value) => {
                            history.push('/admin/products')
                            dispatch(allProduct())
                        });
                })
            })
        });
    }

    const [description, setDescription] = useState(null);
    return (
        <div className="col-md grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Sửa sản phẩm</h4>
                    <p className="card-description">
                        Chúc bạn may mắn
                    </p>

                    <form onSubmit={handleSubmit(onHandleSubmit)} className="forms-sample">
                        <div className="form-group">
                            <label htmlFor="exampleInputUsername1">Danh mục</label>
                            <select className="form-control form-control-lg" name="category_id">
                                {showCategories(product.category_id)}
                            </select>
                        </div>
                        {/*danh muc*/}

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
                                   defaultValue={product.name}
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
                            <label htmlFor="exampleInputUsername1">Hinh ảnh sản phẩm</label>
                            <input type="file"
                                   ref={register({
                                       required: true,
                                   })}
                                   name="image"
                                   className="form-control"
                                   id="exampleInputUsername1"
                            />
                            <span className="text-danger">
                                    {errors.image && "Sai url đường dẫn Ảnh"}
                            </span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputUsername1">Thông tin chi tiết sản phẩm</label>

                            <CKEditor
                                editor={ClassicEditor}
                                data={product.description}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setDescription(data);
                                }}
                            />
                            <span className="text-danger">
                                    {errors.description && "Sai description"}
                            </span>

                            <input
                                ref={register({
                                    required: true,
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
                                   defaultValue={product.price}

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
                                   })}
                                   defaultValue={product.quantity}

                                   name="quantity"
                                   className="form-control"
                                   id="exampleInputConfirmPassword1"
                                   placeholder="Số lượng sản phẩm"/>
                            <span className="text-danger">
                                    {errors.quantity && "Số lương chưa đúng"}
                            </span>
                        </div>

                        <button type="submit" className="btn btn-gradient-primary mr-2">Sửa sản phẩm</button>
                        <Link to="/product" className="btn btn-light">Quay Lại</Link>
                    </form>

                </div>
            </div>
        </div>
    )
}


