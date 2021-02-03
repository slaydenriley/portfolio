import React from 'react'
import {connect} from 'react-redux'
import loginUser from '../../actions/loginUser'
import Login from '../../components/Login'

import { Redirect } from 'react-router-dom';

class LoginContainer extends React.Component {

  render() {
    return (
      <div>
        <Login />
      </div>
    )
  }
}

export default LoginContainer
