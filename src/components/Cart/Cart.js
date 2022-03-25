import React from 'react';
import './Cart.css';

const Cart = ({ meal }) => {

    const { name, img } = meal;

    return (
        <div>
            <div className="cart">
                <img src={img} alt="" />
                <h4>{name}</h4>
            </div>
        </div>
    );
};

export default Cart;