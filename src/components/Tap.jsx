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
      <div onClick={() => {props.onTapSelection(props.tapId);}}>
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
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  flavors: PropTypes.string,
  currentRouterPath: PropTypes.string,
  onTapSelection: PropTypes.func,
  tapId: PropTypes.string.isRequired
};

export default Tap;
