import React from 'react';
import TapList from './TapList';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import NewTapForm from './NewTapForm';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TapList}/>
        <Route path='/newtap' component={NewTapForm}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;