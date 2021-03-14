import { createSlice, configureStore, createSelector } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { counterSlice } from "./Store";
import "./App.css";
import { useDispatch } from "react-redux";

// ROUTING
const routes = [
  { name: "redux store" },
  { name: "Animations" },
  { name: "other stuff" },
];

const renderNavButtons = () => {
  return routes.map((route) => (
    <div className="navButtonContainer">
      <button>{route.name}</button>
    </div>
  ));
};

// BASE APP
function App() {
    const dispatch = useDispatch();
  const { add, minus } = counterSlice.actions;

  return (
    <div className="app">
      <section className="sideNav">
        <div className="sideNavContainer">
          <div>{renderNavButtons()}</div>
        </div>
      </section>
      <section className="body">
        <div>
          <label for="add">Add 1</label>
          <input
            type="button"
            id="add"
            name="add"
            label="+"
            onClick={() => dispatch(add())}
          />
          <label for="add">Subtract 1</label>
          <input
            type="button"
            id="minus"
            name="minus"
            onClick={() => dispatch(minus())}
          />
        </div>
      </section>
      <section className="footer">footer</section>
    </div>
  );
}

export default App;
