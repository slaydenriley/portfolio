import React, { Component } from 'react';
import { connect } from 'react-redux'
import fetchUsers from './actions/fetchUsers'


class App extends Component {
  componentDidMount() {
    this.props.fetchUsers({type: 'FETCH_USERS', payload: 'UserAccount'})
  }

  render() {
    return (
      <div className="App">
        Hi, I'm Riley.
      </div>
    )
  };
};

/*
const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}
*/

export default connect(null, {fetchUsers})(App);
