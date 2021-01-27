import React from 'react'
import {connect} from 'react-redux'
import loginUser from '../actions/loginUser'
import Login from '../components/Login'

class LoginContainer extends React.Component {

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
