
import fetchApi from './../utils/apiCall';

// lay danh sach san pham

export const allProduct = () => {
    return dispatch => {
        return fetchApi(`product`,'GET',null).then(({data}) => {
            // dispatch(listProducts(data));
            dispatch(listProducts(data));
        })
    }
}

export const listProducts = (products) => {
    return {
        type: 'LIST_PRODUCTS',
        payload: products,
    };
}

// xóa sản phẩm
export const deleteProduct = (id) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: id,
    }
}

export const deleteProductResquest = (id) => {
    return dispatch => {
        return fetchApi(`product/${id}`,'DELETE',null).then(({data}) => {
            dispatch(deleteProduct(id));
        })
    }
}

