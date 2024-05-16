
/* eslint-disable */
import React, { useState } from 'react';
import './FoodBox.css';

const FoodBox = ({ food, onAdd }) => {
  const [quantity, setQuantity] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleAdd = () => {
    onAdd({ ...food, quantity });
    setTotalCalories(food.calories * quantity);
  };

  const handleReset = () => {
    setQuantity(0);
    setTotalCalories(0);
  };

  const handleQuantityChange = (event) => {
    const value = Number(event.target.value);
    setQuantity(value);
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.image} alt={food.name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.calories} cal per serving</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
              />
              <button className="button is-info" onClick={handleAdd}>
                Add
              </button>
            </div>
          </div>
          <p>
            {quantity} {food.name} = {totalCalories} cal
          </p>
          <button className="button is-danger is-small" onClick={handleReset}>
            Reset
          </button>
        </div>
      </article>
    </div>
  );
};

export default FoodBox;
