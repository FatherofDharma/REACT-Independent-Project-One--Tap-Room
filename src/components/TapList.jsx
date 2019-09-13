import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types';

function TapList(props){
  return (
    <div>
      {props.tapList.map((tap, index) =>
        <Tap name={tap.name}
          brewer={tap.brewer}
          price={tap.price}
          abv={tap.abv}
          flavors={tap.flavors} 
          key={index}/>
      )}
    </div>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array
};

export default TapList;