import React from 'react';

function Header(){
  return (
    <div>
      <h1 className="header">Tap the Sky - Current Brews</h1>
      <style jsx>{`
        .header {
          background-color: black;
          color: orange;
        }
      `}</style>
    </div>
  );
}

export default Header;