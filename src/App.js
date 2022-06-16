import React, { useState } from "react";
import "./App.css";

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  return (
    <div className="App">
      <section className="controls"></section>
    </div>
  );
}

export default App;
