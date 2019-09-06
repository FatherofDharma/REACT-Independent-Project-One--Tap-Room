import React from "react";

function Tap(props){
  return (
    <div>
      <h3>{props.Name} by {props.Brewer}</h3>
      <h5>{props.Price} per Pint - {props.ABV}</h5>
      <p><em>{props.Flavors}</em></p>
      <hr/>
    </div>
  );
}

export default Tap;