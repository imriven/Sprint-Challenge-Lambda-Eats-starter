import React from "react";
import { Route, NavLink } from "react-router-dom";
import Home from "./components/home";
import Pizza from "./components/pizza";
import Success from "./components/success";
import Styled from "styled-components";


//styling

const AllContainer = Styled.div`
display: flex;
justify-content:center;
flex-direction: column;
`
const SuperNav = Styled.nav`
display:flex;
flex-direction:column;
width: 100%;
background-color: red;
padding-bottom: 1%;
border-bottom-right-radius: 20%;
box-shadow: 1px 10px 8px #888888;
`

const StyledLink = Styled(NavLink)`
color:white;
text-decoration: none;
margin: 2%;
`

const SuperContainer = Styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-left:10%;
`
const SuperHeader = Styled.h1`
display: flex;
flex-wrap: wrap;
justify-content:center;
color:white ;
width:100%;
font-family: 'Gotu', sans-serif;
`


const App = () => {
  return (
    
    <AllContainer>
      <SuperNav>
        <SuperHeader>Lambda Eats</SuperHeader>
        <div>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/pizza" >Order</StyledLink> 
        </div>
      </SuperNav>
      <SuperContainer>
      
      {/* Routes / Paths */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/pizza">
       <Pizza />
      </Route>
      <Route path="/success">
       <Success />
      </Route>
  
    </SuperContainer>
    </AllContainer>
  );
};

export default App;
