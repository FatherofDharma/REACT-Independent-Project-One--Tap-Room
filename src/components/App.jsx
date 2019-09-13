import React from 'react';
import TapList from './TapList';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import NewTapForm from './NewTapForm';
import Error404 from './Error404';
import Employee from './Employee';
import { v4 } from 'uuid';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      masterTapList: {},
      selectedTap: null
    };
    this.handleAddingNewTapToList = this.handleAddingNewTapToList.bind(this);
    this.handleChangingSelectedTap = this.handleChangingSelectedTap.bind(this);
  }
  
  handleChangingSelectedTap(tapId){
    console.log(tapId)
    this.setState({selectedTap: tapId});
  }
  
  handleAddingNewTapToList(newTap){
    let newTapId = v4();
    let newMasterTapList = Object.assign({}, this.state.masterTapList, {
      [newTapId]: newTap
    });
    this.setState({masterTapList: newMasterTapList});
  }
  
  render() {
    console.log(this.state.masterTapList);
    console.log(this.state.selectedTap);
    var mainStyle = {
    // will add more styles here after learning a bit more about how the entire document is rendered.
    // backgroundColor: 'grey'
    };

    return (
      <div style={mainStyle}>
        <Header/>
        <Switch>
          <Route exact path='/' render={() => <TapList tapList={this.state.masterTapList} />}/>
          <Route path='/newtap' render={() => <NewTapForm onNewTapCreation={this.handleAddingNewTapToList} />}/>
          <Route path='/employee' render={(props) => <Employee tapList={this.state.masterTapList}
            currentRouterPath ={props.location.pathname} 
            onTapSelection ={this.handleChangingSelectedTap}
            selectedTap={this.state.selectedTap}/>} />
          <Route component={Error404}/>
        </Switch>
      </div>
    );
  }
}

export default App;
