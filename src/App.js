import React from "react";
import { Route, NavLink } from "react-router-dom";
import Home from "./components/home";
import Pizza from "./components/pizza";
import Success from "./components/success";

const App = () => {
  return (
    <>
      <nav>
        <h1>Lambda Eats</h1>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pizza" >Order</NavLink> 
        </div>
      </nav>
    <div>
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
      </div>
    </>
  );
};

export default App;
