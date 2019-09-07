import React from 'react';
import Tap from './Tap';

var masterTapList = [
  {
    name: 'Rain of Hops',
    brewer: 'Cascadian River',
    price: 5.00,
    abv: 5.50,
    flavors: 'Crisp fresh hops with a light taste of mint'
  },
  {
    name: 'Orange You Glad You Have Taste',
    brewer: 'Triple Pour',
    price: 6.00,
    abv: 6.50,
    flavors: 'Like an Orangecicle cranked to eleven'
  },
  {
    name: 'Hop on this Train',
    brewer: 'Never Ending Brewery',
    price: 7.00,
    abv: 7.25,
    flavors: 'Hoppy through and through'
  },
  {
    name: 'Just a Sip Will do ya',
    brewer: 'Cascadian River',
    price: 4.00,
    abv: 4.0,
    flavors: 'A refreshing lager with hints of berries and almonds'
  },
];

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