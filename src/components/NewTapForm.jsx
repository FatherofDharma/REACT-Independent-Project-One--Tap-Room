import React from 'react';

function NewTapForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Beer Name'/>
        <input
          type='text'
          id='brewer'
          placeholder='Brewer'/>
        <input
          type='number'
          id='price'
          placeholder='Price per Pint'/>
        <input
          type='number'
          id='abv'
          placeholder='ABV'/>
        <textarea
          id='flavors'
          placeholder='Flavor Description'/>
        <button type='submit'>Create New Tap Entry</button>
      </form>
    </div>
  );
}

export default NewTapForm;