import React from "react";

const Pizza = () => {
  return (
    <>

<label htmlFor="name">
    Please Enter Your Name:
        <input
          id="name" type="text" name="name" value="" onChange="" placeholder="Name"
        /></label>

      <label htmlFor="Pizza Size">
        What size Pizza would you like? Required
        <select data-cy="" value="" id="size" name="" onChange="">
          <option value="">Select One</option>
          <option value="personal">Personal</option>
          <option value="12 inch">12 inch</option>
          <option value="18 inch">18 inch</option>
        </select>
      </label>

      <label htmlFor="Pizza Sauce">
        What Pizza Sauce would you like? Required
        <input type="radio" value="" name="tomato" onChange="" checked>
          Tomato Sauce
        </input>
        <input type="radio" value="" name="pesto" onChange="">
          Pesto Sauce
        </input>
        <input type="radio" value="" name="olive oil" onChange="">
          Olive Oil Sauce
        </input>
        <input type="radio" value="" name="ranch" onChange="">
          Ranch Sauce
        </input>
      </label>

      <label htmlFor="Toppings">
        Choose up to Ten Toppings:
        <input
          type="checkbox"
          data-cy=""
          name="pepperoni"
          checked=""
          onChange=""
        />{" "}
        Pepperoni
        <input
          type="checkbox"
          data-cy=""
          name="sausage"
          checked=""
          onChange=""
        />{" "}
        Sausage
        <input
          type="checkbox"
          data-cy=""
          name="canadian bacon"
          checked=""
          onChange=""
        />{" "}
        Canadian Bacon
        <input
          type="checkbox"
          data-cy=""
          name="grilled chicken"
          checked=""
          onChange=""
        />{" "}
        Grilled Chicken
        <input
          type="checkbox"
          data-cy=""
          name="boiled egg"
          checked=""
          onChange=""
        />{" "}
        Boiled Eggs
        <input
          type="checkbox"
          data-cy=""
          name="oysters"
          checked=""
          onChange=""
        />{" "}
        Oysters
        <input
          type="checkbox"
          data-cy=""
          name="shrimp"
          checked=""
          onChange=""
        />{" "}
        Shrimp
        <input
          type="checkbox"
          data-cy=""
          name="calamari"
          checked=""
          onChange=""
        />{" "}
        Calamari
        <input
          type="checkbox"
          data-cy=""
          name="fried mozzarella"
          checked=""
          onChange=""
        />{" "}
        Fried Mozzarella Sticks
        <input
          type="checkbox"
          data-cy=""
          name="onions"
          checked=""
          onChange=""
        />{" "}
        Onions
        <input
          type="checkbox"
          data-cy=""
          name="peppers"
          checked=""
          onChange=""
        />{" "}
        Tri-Peppers (orange, yellow, red)
        <input
          type="checkbox"
          data-cy=""
          name="pineapple"
          checked=""
          onChange=""
        />{" "}
        Pineapple
        <input
          type="checkbox"
          data-cy=""
          name="spinach"
          checked=""
          onChange=""
        />{" "}
        Spinach
        <input
          type="checkbox"
          data-cy=""
          name="artichoke"
          checked=""
          onChange=""
        />{" "}
        Artichoke Hearts
      </label>

      <label htmlFor="Instructions">
        Special Instructions
        <textarea
          id="motivation"
          name="motivation"
          placeholder="Is there anything else you need?"
          value=""
          onChange=""
        />{" "}
      </label>

      <button>Submit Deliciousness!</button>
    </>
  );
};
export default Pizza;
