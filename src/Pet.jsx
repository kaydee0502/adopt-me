import React from 'react';

// const Pet = (props) => {  return React.createElement("div", {}, [
//     React.createElement("h2", {}, props.car),
//     React.createElement("h3", {}, props.comp),
//     React.createElement("h3", {}, props.rate),
//   ]);
// };

const Pet = (props) => {
    return(
        <div>
            <h2>{props.car}</h2>
            <h3>{props.comp}</h3>
            <h3>{props.rate}</h3>
        </div>
    )

}

export default Pet;