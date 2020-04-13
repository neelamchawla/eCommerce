import { createSelector } from "reselect";

const selectUser = state => state.user;

// const selectCart = state => state.cart;

export const selectCurrentUser = createSelector(
    // can be used as below
    // selectUser, selectCart,

    // or in array as well
    [selectUser
    // , selectCart
    ],
    // (user, cart) => user.currentUser
    (user) => user.currentUser
)