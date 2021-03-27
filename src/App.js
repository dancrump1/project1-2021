import ReduxDemonstration from "./ReduxDemonstration";
import "./App.css";
import React, { useState } from "react";
import AnimationsDemonstration from "./AnimationsDemonstration";
import Home from "./Home";

// ROUTING
const routes = [
  { name: "Home", location: "home" },
  { name: "redux store", location: "redux" },
  { name: "Animations", location: "animations" },
  { name: "other stuff" },
];

const renderNavButtons = (setCurrentRoute) => {
  return routes.map((route) => (
      <button className="navButton" onClick={() => setCurrentRoute(route.location)}>
        {route.name}
      </button>
  ));
};

// BASE APP
function App() {
  const [currentRoute, setCurrentRoute] = useState("home");

  return (
    <div className="app">
      <section className="sideNav">
        <div className="sideNavContainer">
          {renderNavButtons(setCurrentRoute)}
        </div>
      </section>
      <section className="body">
        {currentRoute === "home" && <Home />}
        {currentRoute === "redux" && <ReduxDemonstration />}
        {currentRoute === "animations" && <AnimationsDemonstration />}
      </section>
      <section className="footer">footer</section>
    </div>
  );
}

export default App;
