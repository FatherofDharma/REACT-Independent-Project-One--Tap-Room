import React from 'react';
import PropTypes from 'prop-types';

function NewTapForm(props){
  let _name = null;
  let _brewer = null;
  let _price = null;
  let _abv = null;
  let _flavors = null; 
  
  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    props.onNewTapCreation({name: _name.value, brewer: _brewer.value, price: _price.value, abv: _abv.value, flavors: _flavors.value});
    _name.value = '';
    _brewer.value = '';
    _price.value
    _abv.value = '';
    _flavors.value = '';
  }
  return (
    <div>
      <form onSubmit={handleNewTapFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Beer Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='brewer'
          placeholder='Brewer'
          ref={(input) => {_brewer = input;}}/>
        <input
          type='number'
          id='price'
          placeholder='Price per Pint'
          ref={(input) => {_price = input;}}/>
        <input
          type='number'
          id='abv'
          placeholder='ABV'
          ref={(input) => {_abv = input;}}/>
        <textarea
          id='flavors'
          placeholder='Flavor Description'
          ref={(textarea) => {_flavors = textarea;}}/>
        <button type='submit'>Create New Tap Entry</button>
      </form>
    </div>
  );
}

NewTapForm.propTypes ={
  onNewTapCreation: PropTypes.func
};

export default NewTapForm;