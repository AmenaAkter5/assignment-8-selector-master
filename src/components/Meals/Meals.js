import React, { useEffect, useState } from 'react';
import './Meals.css';

const Meals = () => {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('meals.json')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, []);

    return (
        <div>
            <h1>This is Meal {meals.length}</h1>
            {
                meals.map(meal => console.log(meal))
            }
            {
                // meals.map(meal => console.log(meal))
            }
        </div>
    );
};

export default Meals;