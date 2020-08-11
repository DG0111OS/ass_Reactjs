

const initialState = {};

const products = (state = initialState, action) => {
    switch (action.type) {
        case 'LIST_CATEGORIES': {
            return {...action.cate};
        }

        default:
            return state
    }
};

export default products;
