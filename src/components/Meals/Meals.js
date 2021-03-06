import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import RandomItem from '../RandomItem/RandomItem';
import './Meals.css';


const Meals = () => {

    // data load state
    const [meals, setMeals] = useState([]);

    // cart state
    const [cart, setCart] = useState([]);

    // randomly selected item state
    const [randomSelect, setRandomSelect] = useState([]);

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

    // Random Choose btn event handler
    const randomChoose = (cart) => {

        // button click handle if cart array is empty
        if (cart.length === 0) {
            return;
        };

        const random = Math.floor(Math.random() * cart.length);
        setRandomSelect(cart[random]);
    }

    // reset btn event handler
    const resetAll = (cart, randomSelect) => {
        cart = [];
        randomSelect = [];
        setCart(cart);
        setRandomSelect(randomSelect);
    }

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
                <div className="cart-info">
                    <div>
                        <h2>Selected Items</h2>
                        {
                            cart.map(meal => <Cart
                                key={meal.id}
                                meal={meal}
                            ></Cart>)
                        }
                    </div>
                    <div>
                        <h2>Random Selector</h2>
                        <RandomItem
                            key={randomSelect.id}
                            randomSelect={randomSelect}
                        ></RandomItem>
                        <button className="random-btn" onClick={() => randomChoose(cart)}>Choose For Me</button>
                        <button className="reset-btn" onClick={() => resetAll(cart, randomSelect)}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meals;