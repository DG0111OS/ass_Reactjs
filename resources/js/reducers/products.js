

const initialState = {
    list: [],
}

const products = (state = initialState, action) => {
    switch (action.type) {
        case 'LIST_PRODUCT': {
            const newList = [...state.list];
            newList.push(action.payload);
            return state
        }
        default:
            return state
    }
};

export default products;
