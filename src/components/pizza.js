import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";

function Pizza() {
  const [errors, setErrors] = useState({
    name: ""
  });

  const [formState, setFormState] = useState({
    name: "",
    size: "",
    sauce: "",
    instructions: ""
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [databaseResponse, setDatabaseResponse] = useState();

  const handleFormChange = (e) => {
    e.persist();
    const newFormData = {
        ...formState,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value
      };
      validateChange(e);
      setFormState(newFormData);
    };


  const submitForm = event => {
    event.preventDefault();
    // More code here
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">
        Please Enter Your Name:
        <input
          id="name"
          type="text"
          name="name"
          value={formState.name}
          onChange={handleFormChange}
          placeholder="Name"
        />
      </label>

      <label htmlFor="Pizza Size">
        What size Pizza would you like? Required
        <select
          data-cy=""
          value={formState.size}
          id="size"
          name="size"
          onChange={handleFormChange}
        >
          <option value="">Select One</option>
          <option value="personal">Personal</option>
          <option value="12 inch">12 inch</option>
          <option value="18 inch">18 inch</option>
        </select>
      </label>

      <label htmlFor="sauce">
        What Pizza Sauce would you like? Required Tomato{" "}
        <input
          type="radio"
          value="tomato"
          name="sauce"
          onChange={handleFormChange}
          checked
        ></input>
        Olive Oil{" "}
        <input
          type="radio"
          value="oliveOil"
          name="sauce"
          onChange={handleFormChange}
        ></input>
        Pesto{" "}
        <input
          type="radio"
          value="pesto"
          name="sauce"
          onChange={handleFormChange}
        ></input>
        Ranch{" "}
        <input
          type="radio"
          value="ranch"
          name="sauce"
          onChange={handleFormChange}
        ></input>
      </label>

      <label htmlFor="Toppings">
        Choose up to Ten Toppings:
        <input
          type="checkbox"
          data-cy=""
          name="pepperoni"
          checked={formState.pepperoni}
          onChange=""
        />
        Pepperoni
        <input
          type="checkbox"
          data-cy=""
          name="sausage"
          checked={formState.sausage}
          onChange=""
        />
        Sausage
        <input
          type="checkbox"
          data-cy=""
          name="bacon"
          checked={formState.bacon}
          onChange=""
        />
        Canadian Bacon
        <input
          type="checkbox"
          data-cy=""
          name="chicken"
          checked={formState.chicken}
          onChange=""
        />
        Grilled Chicken
        <input
          type="checkbox"
          data-cy=""
          name="egg"
          checked={formState.egg}
          onChange=""
        />
        Boiled Eggs
        <input
          type="checkbox"
          data-cy=""
          name="oysters"
          checked={formState.oysters}
          onChange=""
        />
        Oysters
        <input
          type="checkbox"
          data-cy=""
          name="shrimp"
          checked={formState.shrimp}
          onChange=""
        />
        Shrimp
        <input
          type="checkbox"
          data-cy=""
          name="calamari"
          checked={formState.calamari}
          onChange=""
        />
        Calamari
        <input
          type="checkbox"
          data-cy=""
          name="mozzarella"
          checked={formState.mozzarella}
          onChange=""
        />
        Fried Mozzarella Sticks
        <input
          type="checkbox"
          data-cy=""
          name="onions"
          checked={formState.onions}
          onChange=""
        />
        Onions
        <input
          type="checkbox"
          data-cy=""
          name="peppers"
          checked={formState.peppers}
          onChange=""
        />
        Tri-Peppers (orange, yellow, red)
        <input
          type="checkbox"
          data-cy=""
          name="pineapple"
          checked={formState.pineapple}
          onChange=""
        />
        Pineapple
        <input
          type="checkbox"
          data-cy=""
          name="spinach"
          checked={formState.spinach}
          onChange=""
        />
        Spinach
        <input
          type="checkbox"
          data-cy=""
          name="artichoke"
          checked={formState.artichoke}
          onChange=""
        />
        Artichoke Hearts
      </label>

      <label htmlFor="Instructions">
        Special Instructions
        <textarea
          id="instructions"
          name="instructions"
          placeholder="Is there anything else you need?"
          value={formState.instructions}
          onChange={handleFormChange}
        />
      </label>

      <button disabled={buttonDisabled}>Submit Deliciousness!</button>
    </form>
  );
}

export default Pizza;
