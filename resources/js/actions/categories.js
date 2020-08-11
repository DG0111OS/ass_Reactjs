
import fetchApi from './../utils/apiCall';

// danh sach category
export const listCategories = (cate) => {
    return {
        type: 'LIST_CATEGORIES',
        cate,
    }
}

export const categoryAllResquest = () => {
    return dispatch => {
        return fetchApi(`category`,'GET',null).then(({data}) => {
            dispatch(listCategories(data));
        })
    }
}


// xoa san pham

export const deleteCategoryResquest = (id) => {
    return dispatch => {
        return fetchApi(`category/${id}`,'DELETE',null).then(({data}) => {
            console.log(data);
            dispatch(categoryAllResquest());
        })
    }
}

// them danh muc

export const addCategorytRequest = (data) => {
    return dispatch => {
        return fetchApi(`category`, 'POST', data).then(({data}) => {
            dispatch(categoryAllResquest());
        })
    }
}
