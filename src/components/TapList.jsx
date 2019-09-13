import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types';

function TapList(props){
  return (
    <div>
      {Object.keys(props.tapList).map(function(tapId) {
        let tap = props.tapList[tapId];
        return <Tap name={tap.name}
          brewer={tap.brewer}
          price={tap.price}
          abv={tap.abv}
          flavors={tap.flavors}
          currentRouterPath={props.currentRouterPath}
          key={tapId}
          tapId={tapId}
          onTapSelection={props.onTapSelection}/>;
      })}
    </div>
  );
}

TapList.propTypes = {
  tapList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onTapSelection: PropTypes.func
};

export default TapList;