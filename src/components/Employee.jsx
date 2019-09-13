import React from 'react';
import PropTypes from 'prop-types';
import TapList from './TapList';
import TapDetail from './TapDetail';

function Employee(props){
  return (
    <div>
      <h2>Employee Section</h2>
      <TapDetail />
      <TapList tapList={props.tapList}
        currentRouterPath={props.currentRouterPath}
        onTapSelection={props.onTapSelection} />
    </div>
  );
}

Employee.propTypes = {
  tapList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onTapSelection: PropTypes.func.isRequired
};

export default Employee;