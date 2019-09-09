import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){
  return (
    <div>
      <style jsx>{`
        div {
          background-color: Orange;
          padding-left: 5px;
          margin: 1px;
          border: 3px;
          border-style: solid;
          border-color: black;
          border-radius: 10px;

        }
      `}</style>
      <h3>{props.name} | By: {props.brewer}</h3>
      <h5>${props.price} per Pint - {props.abv}% ABV</h5>
      <p><em>{props.flavors}</em></p>
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
