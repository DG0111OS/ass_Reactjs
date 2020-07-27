import React, {useEffect, useState} from "react";
import {
    Link,
    Redirect,
} from "react-router-dom";


import swal from 'sweetalert';
import axios from 'axios';


export default function AddForm() {
    const [valueInput, setValueInput] = useState({});

    const [category, setCategory] = useState([]);

    useEffect(() => {
        callDataProduct();
    },[])

    const callDataProduct = () => {
        axios.get('/api/category')
            .then(function ({data}) {
                // handle success
                setCategory(data);
            });
    }

    const [redirect, setRedirect] = useState(false);
    //redirect ve product
    if (redirect) {
        return <Redirect to={{pathname: "/product"}}/>;
    }
    // người dùng gửi form nên
    const addProduct = (e) => {

        swal({
            title: "Bạn có chắc chắn?",
            text: "Bạn có muốn thêm sản phẩm này vào danh sách sản phẩm không!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.post('/api/product', valueInput)
                        .then(function ({data}) {
                            console.log(data);
                            setRedirect(true);
                        })
                } else {
                    swal("Sản phẩm chưa được thêm");
                }
            });

        e.preventDefault();
    }

    // lấy ra giá trị input

    const onhashchange = (e) => {
        const {name, value} = e.target;

        setValueInput({
            ...valueInput, // theme cai mang cũ vào này.
            [name]: value
        })
    }

    //hien thi category
    const showCategory = () => {
        return _.map(category, ({name, id}) => {
            return (
                <option key={id} value={id}>{name}</option>
            )
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
                    <form onSubmit={addProduct} className="forms-sample">
                        <div className="form-group">
                            <label htmlFor="exampleInputUsername1">Danh mục</label>
                            <select onChange={onhashchange} className="form-control form-control-lg" name="category_id">
                                {showCategory()}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputUsername1">Tên sản phẩm</label>
                            <input type="text"
                                   onChange={onhashchange}
                                   name="name"
                                   className="form-control"
                                   id="exampleInputUsername1"
                                   placeholder="Tên sản phẩm"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputUsername1">URL Hình ảnh sản phẩm</label>
                            <input type="text"
                                   onChange={onhashchange}
                                   name="image"
                                   className="form-control"
                                   id="exampleInputUsername1"
                                   placeholder="Đường dẫn ảnh sản phẩm"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputUsername1">Thông tin chi tiết sản phẩm</label>
                            <input type="text"
                                   onChange={onhashchange}
                                   name="description"
                                   className="form-control"
                                   id="exampleInputUsername1"
                                   placeholder="Thông tin chi tiết sản phẩm"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Giá sản phẩm</label>
                            <input type="number"
                                   onChange={onhashchange}

                                   name="price"
                                   className="form-control"
                                   id="exampleInputEmail1"
                                   placeholder="Giá sản phẩm"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Giảm giá của sản phẩm</label>
                            <input type="number"
                                   onChange={onhashchange}

                                   name="promotion_price"
                                   className="form-control"
                                   id="exampleInputPassword1"
                                   placeholder="Giảm giá của sản phẩm"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputConfirmPassword1">Số lượng sản phẩm</label>
                            <input type="number"
                                   onChange={onhashchange}

                                   name="quantity"
                                   className="form-control"
                                   id="exampleInputConfirmPassword1"
                                   placeholder="Số lượng sản phẩm"/>
                        </div>

                        <button type="submit" className="btn btn-gradient-primary mr-2">Thêm sản phẩm</button>
                        <Link to="/product" className="btn btn-light">Quay Lại</Link>
                    </form>
                </div>
            </div>
        </div>

    )
}
