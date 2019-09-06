import React from "react";
import PropTypes from "prop-types";

function Tap(props){
  return (
    <div>
      <h3>{props.Name} by {props.Brewer}</h3>
      <h5>${props.Price} per Pint - {props.AbV}%</h5>
      <p><em>{props.Flavors}</em></p>
      <hr/>
    </div>
  );
}

Tap.propTypes = {
  Name: PropTypes.string.required,
  Brewer: PropTypes.string.required,
  Price: PropTypes.number.required,
  AbV: PropTypes.number.required,
  Flavors: PropTypes.string
};

export default Tap;