/* eslint-disable */
import React, { useState } from 'react';
import FoodBox from './component/FoodBox';
import Search from './component/Search';

const foods = [
  { name: 'Pizza', calories: 400, image: 'https://i.imgur.com/eTmWoAN.png' },
  { name: 'Salad', calories: 150, image: 'https://i.imgur.com/DupGBz5.jpg' },
  { name: 'Sweet Potato', calories: 120, image: 'https://i.imgur.com/hGraGyR.jpg' },
  { name: 'Gnocchi', calories: 500, image: 'https://i.imgur.com/93ekwW0.jpg' },
  { name: 'Pot Roast', calories: 350, image: 'https://i.imgur.com/WCzJDWz.jpg' },
  { name: 'Lasagna', calories: 750, image: 'https://i.imgur.com/ClxOafl.jpg' },
  { name: 'Hamburger', calories: 400, image: 'https://i.imgur.com/LoG39wK.jpg' },
  { name: 'Pad Thai', calories: 475, image: 'https://i.imgur.com/5ktcSzF.jpg' },
  { name: 'Almonds', calories: 75, image: 'https://i.imgur.com/JRp4Ksx.jpg' },
  { name: 'Bacon', calories: 175, image: 'https://i.imgur.com/7GlqDsG.jpg' },
  { name: 'Hot Dog', calories: 275, image: 'https://i.imgur.com/QqVHdRu.jpg' },
  { name: 'Chocolate Cake', calories: 490, image: 'https://i.imgur.com/yrgzA9x.jpg' },
  { name: 'Wheat Bread', calories: 175, image: 'https://i.imgur.com/TsWzMfM.jpg' },
  { name: 'Orange', calories: 85, image: 'https://i.imgur.com/abKGOcv.jpg' },
  { name: 'Banana', calories: 175, image: 'https://i.imgur.com/BMdJhu5.jpg' },
  { name: 'Yogurt', calories: 125, image: 'https://i.imgur.com/URhdrAm.png' }
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [addedFoods, setAddedFoods] = useState([]);

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddFood = (food) => {
    const existingFood = addedFoods.find((f) => f.name === food.name);
    if (existingFood) {
      setAddedFoods(
        addedFoods.map((f) =>
          f.name === food.name
            ? { ...f, quantity: f.quantity + food.quantity }
            : f
        )
      );
    } else {
      setAddedFoods([...addedFoods, food]);
    }
  };

  const handleResetFood = (foodName) => {
    setAddedFoods(addedFoods.filter((food) => food.name !== foodName));
  };

  return (
    <div className="App">
      <Search onSearch={setSearchTerm} />
      {filteredFoods.map((food, index) => (
        <FoodBox key={index} food={food} onAdd={handleAddFood} />
      ))}
      <div>
       
      </div>
    </div>
  );
};

export default App;
