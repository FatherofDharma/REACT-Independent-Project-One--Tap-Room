import React from 'react';
import PropTypes from 'prop-types';

function TapDetail(props){
  return (
    <div>
      <style jsx>{`
        div {
          background-color: rgb(79, 114, 198);
          padding-left: 5px;
          margin: 1px;
          border: 3px;
          border-style: solid;
          border-color: black;
          border-radius: 10px;
          
        }
      `}</style>
      <h1>Tap Details:</h1>
      <h3>{props.selectedTap.name} | By: {props.selectedTap.brewer}</h3>
      <h5>${props.selectedTap.price} per Pint - {props.selectedTap.abv}% ABV</h5>
      <p><em>{props.selectedTap.flavors}</em></p>
    </div>
  );
}

TapDetail.propTypes = {
  selectedTap: PropTypes.object
};

export default TapDetail;