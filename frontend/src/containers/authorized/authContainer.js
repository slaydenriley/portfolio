import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

class AuthContainer extends React.Component {
  componentDidMount() {
    this.loginStatus()
  }

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in',
   {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        console.log(response)
      } else {
        console.log(response)
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  render() {
    return(
      <div>Logged</div>
    )
  }
}

export default AuthContainer
