import React from 'react'
import {connect} from 'react-redux'
import logout from '../../actions/logoutUser'
import {Redirect} from 'react-router-dom'

class LogoutContainer extends React.Component {

  componentWillMount() {
    this.props.dispatch(logout());
  }

  render() {
    return(
      <Redirect to="/" />
    )
  }
}

export default connect()(LogoutContainer)
