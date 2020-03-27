import React from "react";
import { Route, NavLink } from "react-router-dom";
import Home from "./components/home";
import Pizza from "./components/pizza";
import Success from "./components/success";

const App = () => {
  return (
    <>
      <nav>
        <h3>Lambda Eats</h3>
        <div>
          {/* 
          <NavLink to="/">Home</NavLink>
            <NavLink to={Pizza} >Order</NavLink> 
          */}
        </div>
      </nav>

      {/* Routes / Paths */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route>
        <Pizza />{" "}
      </Route>
    </>
  );
};
export default App;
