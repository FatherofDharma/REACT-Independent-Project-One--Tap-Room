import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){
  const tapInformation =
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
  </div>;
  if (props.currentRouterPath === '/employee') {
    return (
      <div onClick={() => {props.onTapSelection({name: props.name, brewer: props.brewer, price: props.price, abv: props.abv, flavors: props.flavors});}}>
        {tapInformation}
      </div>
    );
  } else {
    return (
      <div>
        {tapInformation}
      </div>
    );
  }
}

Tap.propTypes = {
  name: PropTypes.string.required,
  brewer: PropTypes.string.required,
  price: PropTypes.number.required,
  abv: PropTypes.number.required,
  flavors: PropTypes.string,
  currentRouterPath: PropTypes.string,
  onTapSelection: PropTypes.func
};

export default Tap;
