import React from 'react';
import PropTypes from 'prop-types';
import TapList from './TapList';

function Employee(props){
  return (
    <div>
      <h2>Employee</h2>
      <TapList tapList={props.tapList}
        currentRouterPath={props.currentRouterPath} />
    </div>
  );
}

Employee.propTypes = {
  tapList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
};

export default Employee;