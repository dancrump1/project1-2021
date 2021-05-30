import ReduxDemonstration from "./ReduxDemonstration";
import React, { useState } from "react";
import {motion} from 'framer-motion';
import AnimationsDemonstration from "./AnimationsDemonstration";
import Home from "./Home";
import "./App.css";

// ROUTING
// TODO: use react-router or something to actually use the url to update route
const routes = [
  { name: "Home", location: "home" },
  { name: "redux store", location: "redux" },
  { name: "Animations", location: "animations" },
  { name: "other stuff", location: "otherStuff" },
];

const renderNavButtons = (setCurrentRoute) => {
  return routes.map((route) => (
    <motion.button
      className="navButton"
      onClick={() => setCurrentRoute(route.location)}
      whileHover={{scale: .95}}
    >
      {route.name}
    </motion.button>
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
        {currentRoute === routes[0].location && <Home />}
        {currentRoute === routes[1].location && <ReduxDemonstration />}
        {currentRoute === routes[2].location && <AnimationsDemonstration />}
        {currentRoute === routes[3].location && (
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
