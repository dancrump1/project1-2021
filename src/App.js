import ReduxDemonstration from "./ReduxDemonstration";
import "./App.css";

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


  return (
    <div className="app">
      <section className="sideNav">
        <div className="sideNavContainer">
          <div>{renderNavButtons()}</div>
        </div>
      </section>
      <section className="body">
        <ReduxDemonstration />
      </section>
      <section className="footer">footer</section>
    </div>
  );
}

export default App;
