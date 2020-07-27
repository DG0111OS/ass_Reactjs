import React, {useEffect, useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

//form hook
import {useForm} from "react-hook-form";
import axios from 'axios';


export default function EditForm() {

    let {id} = useParams();

    const [product, setProduct] = useState([]);


    useEffect(() => {
        axios.get(`/api/product/${id}`)
            .then(function (response) {
                // handle success
                setProduct(response);
            });
    },[])

    const {register, handleSubmit, watch, errors} = useForm();

    const [valueInput, setValueInput] = useState({});

    const onhashchange = (e) => {
        const {name, value} = e.target;

        setValueInput({
            ...valueInput, // theme cai mang cũ vào này.
            [name]: value
        })
    }

    return (
        <div className="col-md grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Thêm sản phẩm</h4>
                    <p className="card-description">
                        Chúc bạn may mắn
                    </p>
                    <form onSubmit={handleSubmit()} className="forms-sample">
                        <div className="form-group">
                            <label htmlFor="exampleInputUsername1">Danh mục</label>
                            <select onChange={onhashchange} className="form-control form-control-lg" name="category_id">
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputUsername1">Tên sản phẩm</label>
                            <input type="text"
                                   ref={register({
                                       required: true,
                                       maxLength: 50,
                                       pattern: /^[a-zA-Z ]+$/
                                   })}
                                   name="name"
                                   className="form-control"
                                   id="exampleInputUsername1"
                                   placeholder="Tên sản phẩm"/>
                            <span className="text-danger">
                                    {errors.name && "Sai tên sản phẩm"}
                                </span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputUsername1">URL Hình ảnh sản phẩm</label>
                            <input type="text"
                                   ref={register({
                                       required: true,
                                       pattern: /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
                                   })}
                                   name="image"
                                   className="form-control"
                                   id="exampleInputUsername1"
                                   placeholder="Đường dẫn ảnh sản phẩm"/>
                            <span className="text-danger">
                                    {errors.image && "Sai url đường dẫn Ảnh"}
                            </span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputUsername1">Thông tin chi tiết sản phẩm</label>
                            <input type="text"
                                   ref={register({
                                       required: true,
                                       minLength: 10,
                                   })}
                                   name="description"
                                   className="form-control"
                                   id="exampleInputUsername1"
                                   placeholder="Thông tin chi tiết sản phẩm"/>
                            <span className="text-danger">
                                    {errors.description && "Thông tin sản phẩm sai"}
                        </span>

                        </div>


                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Giá sản phẩm</label>
                            <input type="number"
                                   ref={register({
                                       required: true,
                                       min: 1,
                                   })}
                                   name="price"
                                   className="form-control"
                                   id="exampleInputEmail1"
                                   placeholder="Giá sản phẩm"/>
                            <span className="text-danger">
                                    {errors.price && "Giá sản phẩm chưa đúng"}
                        </span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Giảm giá của sản phẩm</label>
                            <input type="number"
                                   ref={register({
                                       required: true,
                                       min: 1,
                                   })}
                                   name="promotion_price"
                                   className="form-control"
                                   id="exampleInputPassword1"
                                   placeholder="Giảm giá của sản phẩm"/>
                            <span className="text-danger">
                                    {errors.promotion_price && "Giảm giá sản phẩm chưa đúng"}
                        </span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputConfirmPassword1">Số lượng sản phẩm</label>
                            <input type="number"
                                   ref={register({
                                       required: true,
                                       min: 0,
                                   })}
                                   name="quantity"
                                   className="form-control"
                                   id="exampleInputConfirmPassword1"
                                   placeholder="Số lượng sản phẩm"/>
                            <span className="text-danger">
                                    {errors.quantity && "Số lương chưa đúng"}
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
