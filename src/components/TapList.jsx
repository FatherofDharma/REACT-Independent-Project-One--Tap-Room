import React from 'react';
import Tap from './Tap';

function TapList(){
  return (
    <Tap
      Name="Rain of Hops"
      Brewer="Clouty Skies"
      Price={5.00}
      AbV={4.3}
      Flavors="A hint of citrus, with floral notes, finishing with a subtle note of hops."
    />
  );
}

export default TapList;