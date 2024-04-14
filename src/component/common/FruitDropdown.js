import React from "react";
import { useState } from "react";

//need to cal Get all user api
const originalList = [
  { id: 1, name: "Apple", category: "STUDENT" },
  { id: 2, name: "Carrot", category: "INSTRUCTOR" },
  { id: 3, name: "Banana", category: "ADMIN" },
  { id: 4, name: "Broccoli", category: "INSTRUCTOR" },
];

// Filter the list to get only fruits
const fruitsList = originalList.filter(
  (item) => item.category === "INSTRUCTOR"
);
console.log("Fruits List:", fruitsList);
const FruitDropdown = () => {
  const [selectedFruit, setSelectedFruit] = useState("");

  const handleSelectChange = (e) => {
    setSelectedFruit(e.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="fruitSelect" className="form-label">
            Select a fruit:
          </label>
          <select
            id="fruitSelect"
            className="form-select"
            onChange={handleSelectChange}
            value={selectedFruit}
          >
            <option value="">Select a fruit</option>
            {fruitsList.map((fruit) => (
              <option key={fruit.id} value={fruit.name}>
                {fruit.name}
              </option>
            ))}
          </select>
          {selectedFruit && (
            <div className="mt-3">
              You selected: <strong>{selectedFruit}</strong>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FruitDropdown;
