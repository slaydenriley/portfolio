import React, { Component } from 'react';
import {connect} from 'react-redux'
import UsersContainer from './containers/usersContainer'


class App extends Component {

  render() {
    return (
      <div className="App">
        <UsersContainer />
      </div>
    )
  };
};

export default App;
