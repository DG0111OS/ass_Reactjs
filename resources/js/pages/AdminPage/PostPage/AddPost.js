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
import {allPosts} from "../../../actions/posts";

export default function AddPost() {
    const history = useHistory();
    const {register, handleSubmit, watch, errors} = useForm();
    const cate = useSelector(state => state.categories);

    const [description, seTDescription] = useState(null);
    const dispatch = useDispatch();

    // luu san pham
    const onHandleSubmit = (data) => {
        console.log(data.image[0]);
        let file = data.image[0];
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                const listData = {
                    ...data,
                    image: url
                }

                fetchApi('post','POST', listData).then(({data}) => {
                    swal("Thêm bài viết thành công")
                        .then((value) => {
                            history.push('/admin/posts')
                            dispatch(allPosts())
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
                            <label htmlFor="exampleInputUsername1">Tiêu đề</label>
                            <input type="text"
                                   ref={register({
                                       required: true,
                                       minLength: 5,
                                       pattern: /^[\S][\S]/
                                   })}
                                   name="title"
                                   className="form-control"
                                   id="exampleInputUsername1"
                                   placeholder="Tên sản phẩm"/>
                            <span className="text-danger">
                                 {errors.title?.type === "required" && "Tên sản phẩm không được để trống!"}
                                {errors.title?.type === "minLength" && "Tên sản phẩm ít nhất 5 ký tự!"}
                                {errors.title?.type === "pattern" && "Tên sản phẩm không thể chỉ là khoảng trắng!"}
                            </span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputUsername1">URL Hình ảnh bài viết</label>
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
                            <label htmlFor="exampleInputUsername1">Nội dung</label>
                            <CKEditor
                                editor={ClassicEditor}
                                data=""
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    seTDescription(data);
                                }}
                            />

                            <span className="text-danger">
                                    {errors.content && "Sai description"}
                            </span>

                            <input
                                ref={register({
                                    required: true,
                                    minLength: 8,
                                })}
                                name='content'
                                value={description}
                                type="text" hidden/>
                        </div>

                        <button type="submit" className="btn btn-gradient-primary mr-2">Thêm bài viết</button>
                        <Link to="/posts" className="btn btn-light">Quay Lại</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
