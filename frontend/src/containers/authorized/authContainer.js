import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

class AuthContainer extends React.Component {
  componentDidMount() {
    this.loginStatus()
  }

  loginStatus = () => {
    return fetch('http://localhost:3001/logged_in', {
      method: 'GET',
      credentials: 'include'})
    .then(res => res.json())
    .then(res => console.log(res))
  }

  render() {
    return(
      <div>Logged</div>
    )
  }
}

export default AuthContainer
