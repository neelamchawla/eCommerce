import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case UserActionTypes.SET_CURRENT_USER:
    // after adding "GOOGLE_SIGN_IN"

    //We can write case like this, if we hv exact same thing to return
    // case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
    // case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
    case UserActionTypes.SIGN_IN_SUCCESS:
        return {
            ...state,
            currentUser: action.payload,
            error: null
            // aft success sign in successfully, we want to clear all the errors
        };
    
    case UserActionTypes.SIGN_OUT_SUCCESS:
        return {
            ...state,
            currentUser: null,
            error: null
        };

    // case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
    // case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
        return {
            ...state,
            error: action.payload
        };
        
        default:
            return state;
    };
};

export default userReducer;
