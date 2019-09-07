import React from 'react';
import TapList from './TapList';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import NewTapForm from './NewTapForm';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TapList}/>
        <Route path='/newtap' component={NewTapForm}/>
      </Switch>
    </div>
  );
}

export default App;