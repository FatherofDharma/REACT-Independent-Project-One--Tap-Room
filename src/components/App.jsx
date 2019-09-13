import React from 'react';
import TapList from './TapList';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import NewTapForm from './NewTapForm';
import Error404 from './Error404';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      masterTapList: []
    };
    this.handleAddingNewTapToList = this.handleAddingNewTapToList.bind(this);
  }
  
  handleAddingNewTapToList(newTap){
    let newMasterTapList = this.state.masterTapList.slice();
    newMasterTapList.push(newTap);
    this.setState({masterTapList: newMasterTapList});
  }
  
  render() {
  var mainStyle = {
    // will add more styles here after learning a bit more about how the entire document is rendered.
    // backgroundColor: 'grey'
  };

    return (
      <div style={mainStyle}>
        <Header/>
        <Switch>
          <Route exact path='/' render={() => <TapList tapList={{this.state.masterTapList} />}/>
          <Route path='/newtap' render={() => <NewTapForm onNewTapCreation={this.handleAddingNewTapToList} />}/>
          <Route component={Error404}/>
        </Switch>
      </div>
    );
  }
}

export default App;
