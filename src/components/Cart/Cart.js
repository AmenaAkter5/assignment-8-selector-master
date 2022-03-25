import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    return (
        <div className="cart">
            <h3>This is cart</h3>
            <p>selected items {cart.length}</p>
        </div>
    );
};

export default Cart;