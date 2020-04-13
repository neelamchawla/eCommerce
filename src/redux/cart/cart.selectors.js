import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
    cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
        0
    )
);

//== this is used to stop re-render each item, there is any update in the project. to save the selected cart items.

//== reduce coding and optimize it. plus can be used same components multiple times.

// ====== to get each value from the collectioon in cart and users data

// const selectCart = state => state.cart;

// const selectUser = state => state.user;

// export const selectCartItems = createSelector(
//     [selectCart, selectUser],
//     (cart, usert) => {
//      apply function to get the required output
//      }
// )

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
    cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price ,
        0
    )
)