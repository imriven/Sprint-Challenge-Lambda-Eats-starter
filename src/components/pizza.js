import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import Styled from "styled-components";

//styling

const AllContainer = Styled.div`
display: flex;
`

const SuperContainer = Styled.div`
display: flex;
margin:5%;
border: 1px solid black;
box-shadow: 10px 10px 8px #888888;
`
const InputDiv = Styled.div`
display:flex;
flex-wrap: no wrap;
align-content:center
margin:2%;
padding:2%;
width:100%;
`
const AwesomeInputs = Styled.input`
width: 150%;
padding: 7px 10%;
box-sizing: border-box;
background-color:floralWhite; 
border-radius: 10px;
margin-top: 5%;
`
const AwesomeSelect = Styled.select`
display:flex;
width: 180%;
height: 30px;
background-color:floralWhite; 
margin-top:5%
`;

const AwesomeTextArea = Styled.textarea`
display:flex;
width: 500%;
height: 30px;
background-color:floralWhite; 
margin-top:5%
`;

const SelectDiv = Styled.div`
display:flex;
justify-content:center;
width: 50%;
`;

const HeadingDiv = Styled.div`
background-color:lightGray;
padding:2%;

`

const Button = Styled.button`
font-size: .8em;
margin: 2%;
padding: 0.8em 1.2em;
border-radius: 8px;
box-shadow: 3px 5px 6px Navy;
display:flex;
justify-content:center;
`;

const ButtonDiv = Styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
`;

const ErrorsDiv = Styled.div`
display:flex;
`;
const Errorp = Styled.p`
color: red;
text-transform:uppercase;
font-size:.7rems;
`;

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

  const history = useHistory();

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
        history.push("/success");
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
    if (e.target.name === "name") {
      validateChange(e);
    }
    setFormState(newFormData);
  };

  return (
    <SuperContainer>
      <form onSubmit={formSubmit}>
        <HeadingDiv>
      <p>Please Enter Your Name</p>
            </HeadingDiv>
        <InputDiv>
          <label htmlFor="name">
            <AwesomeInputs
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
        </InputDiv>
        <HeadingDiv>What size Pizza would you like? Required</HeadingDiv>
        <InputDiv>
          <label htmlFor="Pizza Size">
            <AwesomeSelect
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
            </AwesomeSelect>
          </label>
        </InputDiv>
        <HeadingDiv>What Pizza Sauce would you like? Required</HeadingDiv>
        <InputDiv>
        Tomato &nbsp;
          <label htmlFor="sauce">
            <input
              type="radio"
              value="tomato"
              name="sauce"
              onChange={handleFormChange}
              checked={formState.sauce === "tomato"}
            ></input>
            &nbsp;&nbsp;Olive Oil&nbsp;&nbsp;
            <input
              type="radio"
              value="oliveOil"
              name="sauce"
              onChange={handleFormChange}
              checked={formState.sauce === "oliveOil"}
            ></input>
            &nbsp;&nbsp;Pesto&nbsp;&nbsp;
            <input
              type="radio"
              value="pesto"
              name="sauce"
              onChange={handleFormChange}
              checked={formState.sauce === "pesto"}
            ></input>
            &nbsp;&nbsp;Ranch&nbsp;&nbsp;
            <input
              type="radio"
              value="ranch"
              name="sauce"
              onChange={handleFormChange}
              checked={formState.sauce === "ranch"}
            ></input>
          </label>
        </InputDiv>
        <HeadingDiv>Choose up to Ten Toppings:</HeadingDiv>
        <InputDiv>
          <label htmlFor="Toppings">
            <input
              type="checkbox"
              data-cy="pe"
              name="pepperoni"
              checked={formState.pepperoni}
            />
            Pepperoni&nbsp;&nbsp;
            <input
              type="checkbox"
              data-cy="sausage"
              name="sausage"
              checked={formState.sausage}
            />
            Sausage&nbsp;&nbsp;
            <input
              type="checkbox"
              data-cy="bacon"
              name="bacon"
              checked={formState.bacon}
            />
            Canadian Bacon&nbsp;&nbsp;
            <input
              type="checkbox"
              data-cy="chicken"
              name="chicken"
              checked={formState.chicken}
            />
            Grilled Chicken&nbsp;&nbsp;
            <input
              type="checkbox"
              data-cy="egg"
              name="egg"
              checked={formState.egg}
            />
            Boiled Eggs&nbsp;&nbsp;
            <input
              type="checkbox"
              data-cy="oysters"
              name="oysters"
              checked={formState.oysters}
            />
            Oysters&nbsp;&nbsp;
            <input
              type="checkbox"
              data-cy="shrimp"
              name="shrimp"
              checked={formState.shrimp}
            />
            Shrimp&nbsp;&nbsp;
            <input
              type="checkbox"
              data-cy="calamari"
              name="calamari"
              checked={formState.calamari}
            />
            Calamari&nbsp;&nbsp;
            <input
              type="checkbox"
              data-cy="mozzerella"
              name="mozzarella"
              checked={formState.mozzarella}
            />
            Fried Mozzarella Sticks&nbsp;&nbsp;
            <input
              type="checkbox"
              data-cy="onions"
              name="onions"
              checked={formState.onions}
            />
            Onions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="checkbox"
              data-cy="peppers"
              name="peppers"
              checked={formState.peppers}
            />
            Tri-Peppers (orange, yellow, red)&nbsp;&nbsp;
            <input
              type="checkbox"
              data-cy="pineapple"
              name="pineapple"
              checked={formState.pineapple}
            />
            Pineapple&nbsp;&nbsp;
            <input
              type="checkbox"
              data-cy="spinach"
              name="spinach"
              checked={formState.spinach}
            />
            Spinach&nbsp;&nbsp;
            <input
              type="checkbox"
              data-cy="artichoke"
              name="artichoke"
              checked={formState.artichoke}
            />
            Artichoke Hearts&nbsp;&nbsp;
          </label>
        </InputDiv>
        <HeadingDiv> Special Instructions</HeadingDiv>
        <InputDiv>
          <label htmlFor="Instructions">
           
            <AwesomeTextArea
              id="instructions"
              data-cy="instructions"
              name="instructions"
              placeholder="Is there anything else you need?"
              value={formState.instructions}
              onChange={handleFormChange}
            />
          </label>
        </InputDiv>
        <ButtonDiv>
          <Button data-cy="submit" disabled={buttonDisabled}>
            Submit Deliciousness!
          </Button>
        </ButtonDiv>
      </form>
    </SuperContainer>
  );
}

export default Pizza;
