import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  var headerStyle = {
    backgroundColor: 'black',
    color: 'orange',
    borderRadius: '10',
    paddingLeft: '5',
    margin: '1'
  };

  var headerLinkStyle = {
    color: 'orange'
  };
  return (
    <div style={headerStyle}>
      <h1 >Tap the Sky</h1>
      <Link to="/" style={headerLinkStyle}>Home</Link>  <Link to="/newtap" style={headerStyle}>Add New Beer</Link>
    </div>
  );
}

export default Header;
