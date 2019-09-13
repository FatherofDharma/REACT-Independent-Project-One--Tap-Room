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
        h1{
          color: rgb(238, 242, 35);
        }
      `}</style>
      <h1>Employee Section</h1>
      <h2>Tap Details:</h2>
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