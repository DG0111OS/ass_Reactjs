
import fetchApi from './../utils/apiCall';

// lay danh sach san pham

export const allPosts = () => {
    return dispatch => {
        return fetchApi(`post`,'GET',null).then(({data}) => {
            dispatch(listPosts(data));
        })
    }
}

export const listPosts = (posts) => {
    return {
        type: 'LIST_POSTS',
        payload: posts,
    };
}


// xóa sản phẩm
export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        payload: id,
    }
}

export const deletePostResquest = (id) => {
    return dispatch => {
        return fetchApi(`post/${id}`,'DELETE',null).then(({data}) => {
            dispatch(deletePost(id));
        })
    }
}

