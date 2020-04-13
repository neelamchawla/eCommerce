import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';
import './cart-icon.styles.scss';

import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon"
    onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch =>
({
    toggleCartHidden: () => 
        dispatch(toggleCartHidden())
});

// const mapStateToProps = state => {
//     // console.log("map state to prop - reducer");
//     // console every time any component gets updated, it re-renders
//     return {
//     itemCount: selectCartItemsCount(state)
//     };
// };

// after adding createStructuredSelector
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

// before using cartSelector
// const mapStateToProps = ({ cart: {cartItems} }) => {
//     console.log("map state to prop - reducer");
//     return {
//     itemCount: cartItems.reduce(
//         (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
//         0
//         )
//     };
// };

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
 