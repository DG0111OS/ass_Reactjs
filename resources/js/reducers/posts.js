

const initialState = {};

const products = (state = initialState, action) => {
    switch (action.type) {

        case 'LIST_POSTS': {
            return action.payload;
        }

        case 'DELETE_POST': {
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
