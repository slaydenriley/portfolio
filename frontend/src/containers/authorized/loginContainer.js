import React from 'react'
import Login from '../../components/Login'
import {connect} from 'react-redux'
import loginUser from '../../actions/loginUser'
import {Redirect} from 'react-router-dom'

class LoginContainer extends React.Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = (event) =>  {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let formData = {user: this.state}
    this.props.loginUser(formData)
  };

  render() {
    return (
      <div onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <Login />
      </div>
    )
  }
}

export default connect(null, {loginUser})(LoginContainer)
