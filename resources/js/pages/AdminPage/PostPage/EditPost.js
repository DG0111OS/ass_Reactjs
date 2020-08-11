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
import {allPosts} from "../../../actions/posts";

export default function EditPost() {

    const history = useHistory();

    let {id} = useParams();

    const [post, setPost] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        fetchApi(`post/${id}/edit`, 'GET', null).then(({data}) => {
            setPost(data);
        })
    },[])

    const {register, handleSubmit, watch, errors} = useForm();

    const onHandleSubmit = (data) => {

        let file = data.image[0];
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                const listData = {
                    ...data,
                    image: url
                }
                fetchApi(`post/${id}`,'PUT', listData).then(({data}) => {
                    swal("Sửa bài viết thành công")
                        .then((value) => {
                            history.push('/admin/posts');
                            dispatch(allPosts())
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
                    <h4 className="card-title">Sửa bài viết</h4>
                    <p className="card-description">
                        Chúc bạn may mắn
                    </p>

                    <form onSubmit={handleSubmit(onHandleSubmit)} className="forms-sample">

                        <div className="form-group">
                            <label htmlFor="exampleInputUsername1">Tiểu đề bài viết</label>
                            <input type="text"
                                   ref={register({
                                       required: true,
                                       minLength: 5,
                                       pattern: /^[\S][\S]/
                                   })}
                                   defaultValue={post.title}
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
                            <label htmlFor="exampleInputUsername1">Nội dung bài viết</label>

                            <CKEditor
                                editor={ClassicEditor}
                                data={post.content}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setDescription(data);
                                }}
                            />
                            <span className="text-danger">
                                    {errors.content && "Sai description"}
                            </span>

                            <input
                                ref={register({
                                    required: true,
                                })}
                                name='content'
                                value={description}
                                type="text" hidden/>
                        </div>
                        <button type="submit" className="btn btn-gradient-primary mr-2">Sửa bài viết</button>
                        <Link to="/posts" className="btn btn-light">Quay Lại</Link>
                    </form>

                </div>
            </div>
        </div>
    )
}


