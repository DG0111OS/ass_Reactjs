import React, {useEffect, useState} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import fetchApi from "../../../utils/apiCall";
import {categoryAllResquest} from "../../../actions/categories";

export default function EditCate() {
    const history = useHistory();
    const dispatch = useDispatch();
    const {register, handleSubmit, watch, errors} = useForm();

    const [cate, setCate] = useState({});

    let {id} = useParams();
    useEffect(() => {
        fetchApi(`category/${id}/edit`,'GET',null).then(({data})=> {
            setCate(data);
        })
    },[])

    const editCate = (data) => {
        fetchApi(`category/${id}`,'PUT',data).then(({data})=> {
            swal("Sửa danh mục thành công")
                .then((value) => {
                    history.push('/admin/categories')
                    dispatch(categoryAllResquest())
                });
        })
    }
    return (
        <div className="col-md grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Sửa sản phẩm</h4>
                    <p className="card-description">
                        Chúc bạn may mắn
                    </p>

                    <form onSubmit={handleSubmit(editCate)} className="forms-sample">

                        <div className="form-group">
                            <label htmlFor="exampleInputUsername1">Tên danh mục</label>
                            <input type="text"
                                   ref={register({
                                       required: true,
                                       minLength: 5,
                                       pattern: /^[\S][\S]/
                                   })}
                                   defaultValue={cate.name}
                                   name="name"
                                   className="form-control"
                                   id="exampleInputUsername1"
                                   placeholder="Tên danh mục"/>
                            <span className="text-danger">
                                    {errors.name && "Sai tên danh mục"}
                            </span>
                        </div>

                        <button type="submit" className="btn btn-gradient-primary mr-2">Sửa danh mục</button>
                        <Link to="/admin/categories" className="btn btn-light">Quay Lại</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
