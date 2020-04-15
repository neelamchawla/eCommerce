import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// createSelector
import './checkout.styles.scss'

import { selectCartItems, selectCartTotal } from '../../../redux/cart/cart.selectors'
import CheckoutItem from '../../checkout-item/checkout-item.component'

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
            // cartItem.name
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            )
    }

        <div className='total'>
            <hr />
            <span>TOTAL: ${total}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage);
