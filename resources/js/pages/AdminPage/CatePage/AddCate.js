import React from "react";
import {Link, useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {addCategorytRequest} from './../../../actions/categories';


export default function AddCate() {

    const history = useHistory();


    const {register, handleSubmit, watch, errors} = useForm();

    const cate = useSelector(state => state.categories);

    const dispatch = useDispatch();

    const onHandleSubmit = (data) => {
        dispatch(addCategorytRequest(data));

        swal("Thêm danh mục thành công")
            .then((value) => {
                history.push('/admin/categories')
            });
    }

    return(
        <div className="col-md grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Thêm sản phẩm</h4>
                    <p className="card-description">
                        Chúc bạn may mắn
                    </p>

                    <form onSubmit={handleSubmit(onHandleSubmit)} className="forms-sample">

                        <div className="form-group">
                            <label htmlFor="exampleInputUsername1">Tên danh mục</label>
                            <input type="text"
                                   ref={register({
                                       required: true,
                                       minLength: 5,
                                       pattern: /^[\S][\S]/
                                   })}
                                   name="name"
                                   className="form-control"
                                   id="exampleInputUsername1"
                                   placeholder="Tên danh mục"/>
                            <span className="text-danger">
                                    {errors.name && "Sai tên danh mục"}
                            </span>
                        </div>

                        <button type="submit" className="btn btn-gradient-primary mr-2">Thêm danh mục</button>
                        <Link to="/admin/categories" className="btn btn-light">Quay Lại</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
