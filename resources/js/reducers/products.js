

const initialState = {};

const products = (state = initialState, action) => {
    switch (action.type) {

        case 'LIST_PRODUCTS': {
            return action.payload;
        }

        case 'DELETE_PRODUCT': {
            let result = -1;
            state.forEach(({id}, index) => {
                if(id === action.payload) {
                    result = index;
                }
            });

            state.splice(result,1);
            return [...state];
        }

        default:
            return state
    }
};

export default products;
