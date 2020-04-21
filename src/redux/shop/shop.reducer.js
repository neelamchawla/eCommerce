// import SHOP_DATA from './shop.data';
import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
    // collections: SHOP_DATA
    // after adding SHOP_DATA on the firebase cloud, remove shop_data from the front end side
    collections: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;