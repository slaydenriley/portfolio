import React from 'react'
import {connect} from 'react-redux'
import signupUser from '../../actions/signupUser'
import SignupForm from '../../components/Signup'

class SignupContainer extends React.Component {

  state = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let formData = {user: this.state}
    this.props.signupUser(formData)
  }

  render() {
    return (
      <div onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <SignupForm />
      </div>
    )
  }
}

export default connect(null, {signupUser})(SignupContainer)
