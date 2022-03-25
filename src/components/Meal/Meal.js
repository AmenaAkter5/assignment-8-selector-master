import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Meal.css';

const Meal = ({ addToCart, meal }) => {

    const { name, img, price } = meal;

    return (
        <div>
            <div className="meal">
                <img src={img} alt="" />
                <h3 className="meal-name">{name}</h3>
                <p className="meal-price">Price: <b>${price}</b></p>
                <button onClick={() => addToCart(meal)} className="card-btn">
                    <p>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Meal;