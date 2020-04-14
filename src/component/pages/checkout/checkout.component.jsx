import React from 'react'
import './checkout.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector, createSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../../redux/cart/cart.selectors'

const CheckOutPage = ({ cartItems, total }) => (
    <div className="checkout-page">
        <h1>CHECK OUT PAGE</h1>
    
    <div className="checkout-header">
        <div className="header-block">
            <span>PRODUCT</span>
        </div>
        <div className="header-block">
            <span>DESCRIPTION</span>
        </div>
        <div className="header-block">
            <span>QUANTITY</span>
        </div>
        <div className="header-block">
            <span>PRICE</span>
        </div>
        <div className="header-block">
            <span>REMOVE</span>
        </div>
    </div>
    {
        cartItems.map(cartItem =>
            cartItem.name
            )
    }

        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage);
