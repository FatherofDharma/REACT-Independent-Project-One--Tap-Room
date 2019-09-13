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
          currentRouterPath={props.currentRouterPath}
          key={index}
          onTapSelection={props.onTapSelection}/>
      )}
    </div>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onTapSelection: PropTypes.func
};

export default TapList;