import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import PizzaImg from "../images/close-up-photo-of-pizza-near-bonfire-1082343.jpg"


const Img = Styled.img`
display:flex;
width: 80%;
margin: 5%;
border: 1px solid black;
box-shadow: 10px 10px 8px #888888;
`
const PizzaP = Styled.p `
font-family: 'Josefin Sans';
position:absolute;
color:red;
text-shadow: 3px 3px yellow;
font-size: 5rem;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`

const Home = () => {
  return (
    <>
<Link to="/pizza"><Img src={PizzaImg} alt="pizza deal" />
      <PizzaP>Order Pizza Now!</PizzaP></Link>
    </>
  );
};

export default Home;
