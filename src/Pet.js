import React from 'react';

const Pet = (props) => {  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.car),
    React.createElement("h3", {}, props.comp),
    React.createElement("h3", {}, props.rate),
  ]);
};

export default Pet;