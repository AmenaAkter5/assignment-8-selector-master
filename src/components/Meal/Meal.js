import React from 'react';
import './Meal.css';

const Meal = (props) => {

    const { addToCart, meal } = props
    const { name, img, price } = meal;

    return (
        <div>
            <div className="meal">
                <img src={img} alt="" />
                <h3 className="meal-name">{name}</h3>
                <p className="meal-price">Price: <b>${price}</b></p>
                <button onClick={addToCart} className="card-btn">
                    <p>Add to Cart</p>
                </button>
            </div>
        </div>
    );
};

export default Meal;