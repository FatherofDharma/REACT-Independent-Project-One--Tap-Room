import React from 'react';
import Tap from './Tap';

function TapList(){
  return (
    <div>
      {masterTapList.map((tap, index) =>
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

export default TapList;