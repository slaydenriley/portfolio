import React from 'react'
import {connect} from 'react-redux'
import loginUser from '../actions/loginUser'
import Login from '../components/Login'

import { Redirect } from 'react-router-dom';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
     };
  }


  render() {
    return (
      <div>
        <Login />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    account: state.account
  }
}

export default connect(mapStateToProps, {loginUser})(LoginContainer)
