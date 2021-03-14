import "./App.css";

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

function App() {
  const value = 13;
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
          <input type="button" id="add" name="add" label="+" />
          <label for="add">Subtract 1</label>
          <input type="button" id="minus" name="minus" />
          <div>Value: {value}</div>
        </div>
      </section>
      <section className="footer">footer</section>
    </div>
  );
}

export default App;
