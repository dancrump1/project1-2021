import ReduxDemonstration from "./ReduxDemonstration";
import "./App.css";
import { useState } from "react";
import AnimationsDemonstration from "./AnimationsDemonstration";

// ROUTING
const routes = [
  { name: "Home", location: "home" },
  { name: "redux store", location: "redux" },
  { name: "Animations", location: "animations" },
  { name: "other stuff" },
];

const renderNavButtons = (setCurrentRoute) => {
  return routes.map((route) => (
    <div className="navButtonContainer">
      <button onClick={() => setCurrentRoute(route.location)}>
        {route.name}
      </button>
    </div>
  ));
};

// BASE APP
function App() {
  const [currentRoute, setCurrentRoute] = useState("home");

  return (
    <div className="app">
      <section className="sideNav">
        <div className="sideNavContainer">
          <div>{renderNavButtons(setCurrentRoute)}</div>
        </div>
      </section>
      <section className="body">
        {currentRoute === "home" && <div>Hi</div>}
        {currentRoute === "redux" && <ReduxDemonstration />}
        {currentRoute === "animations" && <AnimationsDemonstration />}
      </section>
      <section className="footer">footer</section>
    </div>
  );
}

export default App;
