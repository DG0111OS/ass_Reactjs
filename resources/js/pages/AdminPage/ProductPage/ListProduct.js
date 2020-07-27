

import React, {useState} from "react";

import {useDispatch, useSelector} from "react-redux";

export default function ListProduct(props) {

    const listProduct = useSelector(state => state.products.list);

    console.log(listProduct);

    const dispatch = useDispatch();

    return (
        <div className="home-page">
            Danh sách sản phẩm
        </div>
    );

}
