import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {

    // data load state
    const [meals, setMeals] = useState([]);

    // cart state
    const [cart, setCart] = useState([]);

    // data fetch
    useEffect(() => {
        fetch('meals.json')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, []);

    // add to cart btn event handler
    const addToCart = (meal) => {
        const newCart = [...cart, meal];
        setCart(newCart);
    };

    return (
        <div className="meals">
            <div className="meals-container">
                {
                    meals.map(meal => <Meal
                        key={meal.id}
                        meal={meal}
                        addToCart={addToCart}
                    ></Meal>)
                }
            </div>
            <div className="cart-container">
                <h2>Selected Items</h2>
                {
                    cart.map(meal => <Cart
                        key={meal.id}
                        meal={meal}
                    ></Cart>)
                }
                <div>
                    <button>Choose For Me</button>
                </div>
                <button>Reset</button>
            </div>
        </div>
    );
};

export default Meals;