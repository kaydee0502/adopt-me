/* global React ReactDOM */

const Pet = (props) => {  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.car),
    React.createElement("h3", {}, props.comp),
    React.createElement("h3", {}, props.rate),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "About me!"),
    React.createElement(Pet, { car: "Evo", comp: "Mitsubishi", rate: 5 }),
    React.createElement(Pet, { car: "R35", comp: "Nissan", rate: 9 }),
    React.createElement(Pet, { car: "WRX", comp: "Subaru", rate: 4 }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
