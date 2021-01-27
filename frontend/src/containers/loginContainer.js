import React from 'react'
import {connect} from 'react-redux'
import loginUser from '../actions/loginUser'
import Login from '../components/Login'

class LoginContainer extends React.Component {

  handleChange = (event) => {
    event.preventDefault()
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("hey!")
  };

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
