import React from 'react';
import './RandomItem.css';

const RandomItem = ({ randomSelect }) => {

    const { name, img } = randomSelect;

    return (
        <div>
            <div className="random">
                <img src={img} alt="" />
                <h4>{name}</h4>
            </div>
        </div>
    );
};

export default RandomItem;