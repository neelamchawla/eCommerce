// import SHOP_DATA from './shop.data';
import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
    // collections: SHOP_DATA
    // after adding SHOP_DATA on the firebase cloud, remove shop_data from the front end side
    collections: null,
    isFetching: false,   //after adding thunk
    errorMessage: undefined
};

// const shopReducer = (state = INITIAL_STATE, action) => {
//     switch (action.type){
//         case ShopActionTypes.UPDATE_COLLECTIONS:
//             return {
//                 ...state,
//                 collections: action.payload
//             }
//         default:
//             return state;
//     }
// }

// after adding thunk

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }

        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return{
                ...state,
                isFetching: false,
                collections: action.payload
            }
            
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
           return{
               ...state,
               isFetching: false,
               errorMessage: action.payload
           }

        default:
            return state;
    }
}

export default shopReducer;