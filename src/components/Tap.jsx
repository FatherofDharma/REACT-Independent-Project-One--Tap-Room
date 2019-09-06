import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){
  return (
    <div>
      <h3>{props.name} by {props.brewer}</h3>
      <h5>${props.price} per Pint - {props.abv}%</h5>
      <p><em>{props.flavors}</em></p>
      <hr/>
    </div>
  );
}

Tap.propTypes = {
  name: PropTypes.string.required,
  brewer: PropTypes.string.required,
  price: PropTypes.number.required,
  abv: PropTypes.number.required,
  flavors: PropTypes.string
};

export default Tap;