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
  { name: "other stuff", location: "otherStuff" },
];

const renderNavButtons = (setCurrentRoute) => {
  return routes.map((route) => (
    <button
      className="navButton"
      onClick={() => setCurrentRoute(route.location)}
    >
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
        {currentRoute === "otherStuff" && (
          <div>
            <h1>
              Please give these links a couple minutes to load. They may fail,
              so just refresh. Heroku is free hosting, so you are waking up the
              website when you first navigate to it
            </h1>
            <a href="https://lesitededan.herokuapp.com/">To my other website</a>
            <a href="https://twitch-clip-discovery.herokuapp.com//">
              Tool to search Twitch for clips
            </a>
          </div>
        )}
      </section>
      <section className="footer">footer</section>
    </div>
  );
}

export default App;
