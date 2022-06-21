import React, { useState } from "react";
import MealList from "./MealList";
import "./App.css";

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function handleChange(e) {
    setCalories(e.target.value);
  }

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=536f69c972de4cd7848b9ab747315fb3&timeFrame=day$targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  return (
    <div className="App">
      <section className="controls">
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
      </section>
      <button onClick={getMealData}> Get Daily Meal Plan </button>
      {mealData && <MealList mealList={mealData} />}
    </div>
  );
}

export default App;
