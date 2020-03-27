import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Please enter at least 2 letters")
    .required("Please enter your name")
});

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

  const history = useHistory()

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  useEffect(() => {
    console.log("success", databaseResponse);
  }, [databaseResponse]);

  const validateChange = e => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({
          ...errors,
          [e.target.name]: ""
        });
      })
      .catch(err => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors
        });
      });
  };

  const formSubmit = e => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then(res => {
        setDatabaseResponse(res.data);
        history.push("/success")
      })
      .catch(err => {
        console.log(err.res);
      });
  };

  const handleFormChange = e => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value
    };
    if(e.target.name === "name") {
      validateChange(e)
    }
    setFormState(newFormData);
  };

  

  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="name">
        Please Enter Your Name:
        <input
          id="name"
          type="text"
          name="name"
          value={formState.name}
          onChange={handleFormChange}
          placeholder="Name"
          data-cy="name"
        />
        {errors.name.length > 0 ? <p>{errors.name}</p> : null}
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
        What Pizza Sauce would you like? Required Tomato
        <input
          type="radio"
          value="tomato"
          name="sauce"
          onChange={handleFormChange}
          checked={formState.sauce ==="tomato"}
      
        ></input>
        Olive Oil
        <input
          type="radio"
          value="oliveOil"
          name="sauce"
          onChange={handleFormChange}
          checked={formState.sauce ==="oliveOil"}
        ></input>
        Pesto{" "}
        <input
          type="radio"
          value="pesto"
          name="sauce"
          onChange={handleFormChange}
          checked={formState.sauce ==="pesto"}
        ></input>
        Ranch{" "}
        <input
          type="radio"
          value="ranch"
          name="sauce"
          onChange={handleFormChange}
          checked={formState.sauce ==="ranch"}
        ></input>
      </label>

      <label htmlFor="Toppings">
        Choose up to Ten Toppings:
        <input
          type="checkbox"
          data-cy="pe"
          name="pepperoni"
          checked={formState.pepperoni}
          
        />
        Pepperoni
        <input
          type="checkbox"
          data-cy="sausage"
          name="sausage"
          checked={formState.sausage}
        />
        Sausage
        <input
          type="checkbox"
          data-cy="bacon"
          name="bacon"
          checked={formState.bacon}
        />
        Canadian Bacon
        <input
          type="checkbox"
          data-cy="chicken"
          name="chicken"
          checked={formState.chicken}
        />
        Grilled Chicken
        <input
          type="checkbox"
          data-cy="egg"
          name="egg"
          checked={formState.egg}
        />
        Boiled Eggs
        <input
          type="checkbox"
          data-cy="oysters"
          name="oysters"
          checked={formState.oysters}
        />
        Oysters
        <input
          type="checkbox"
          data-cy="shrimp"
          name="shrimp"
          checked={formState.shrimp}
        />
        Shrimp
        <input
          type="checkbox"
          data-cy="calamari"
          name="calamari"
          checked={formState.calamari}
        />
        Calamari
        <input
          type="checkbox"
          data-cy="mozzerella"
          name="mozzarella"
          checked={formState.mozzarella}
        />
        Fried Mozzarella Sticks
        <input
          type="checkbox"
          data-cy="onions"
          name="onions"
          checked={formState.onions}
        />
        Onions
        <input
          type="checkbox"
          data-cy="peppers"
          name="peppers"
          checked={formState.peppers}
        />
        Tri-Peppers (orange, yellow, red)
        <input
          type="checkbox"
          data-cy="pineapple"
          name="pineapple"
          checked={formState.pineapple}
        />
        Pineapple
        <input
          type="checkbox"
          data-cy="spinach"
          name="spinach"
          checked={formState.spinach}
        />
        Spinach
        <input
          type="checkbox"
          data-cy="artichoke"
          name="artichoke"
          checked={formState.artichoke}
        />
        Artichoke Hearts
      </label>

      <label htmlFor="Instructions">
        Special Instructions
        <textarea
          id="instructions"
          data-cy="instructions"
          name="instructions"
          placeholder="Is there anything else you need?"
          value={formState.instructions}
          onChange={handleFormChange}
        />
      </label>
      <button data-cy="submit" disabled={buttonDisabled}>Submit Deliciousness!</button>
    </form>
  );
}

export default Pizza;
