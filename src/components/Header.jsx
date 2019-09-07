import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1 className="header">Tap the Sky</h1>
      <style jsx>{`
        .header {
          background-color: black;
          color: orange;
        }
      `}</style>
      <Link to="/">Home</Link> | <Link to="/newtap">Add New Beer</Link>
    </div>
  );
}

export default Header;