import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "About me!"),
//     React.createElement(Pet, { car: "Evo Lancer", comp: "Mitsubishi", rate: 5 }),
//     React.createElement(Pet, { car: "R35", comp: "Nissan", rate: 9 }),
//     React.createElement(Pet, { car: "WRX", comp: "Subaru", rate: 4 }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>About Me!</h1>
      <Pet car="Evo lancer" comp="Mitsubishi" rate="5" />
      <Pet car="Evo lancer" comp="Mitsubishi" rate="5" />
      <Pet car="Evo lancer" comp="Mitsubishi" rate="5" />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
