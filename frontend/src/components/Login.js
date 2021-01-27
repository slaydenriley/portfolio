import React from 'react';
import {connect} from 'react-redux'
import LoginContainer from '../containers/loginContainer'
import loginUser from '../actions/loginUser'

//import { NavLink } from 'react-router-dom';
//import {Navbar, Nav} from 'react-bootstrap'

class Login extends React.Component {

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
    this.setState({
      user: {
        email: '',
        password: ''
      }
    })
  };

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>

          <input type='text' placeholder='Email' value={this.props.email} name="email" onChange={this.handleChange}/><br/>

          <input type='password' placeholder='Password' value={this.props.password} name="password" onChange={this.handleChange}/><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}


export default connect(null, {loginUser})(Login)
