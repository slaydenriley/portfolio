import React from 'react'
import {connect} from 'react-redux'

class AuthContainer extends React.Component {
  componentDidMount() {
    //this.props.fetchAccount()
  }

  render() {
    return null
  }
}
const mapStateToProps = state => {
  return {
    account: state.account
  }
}

export default connect(mapStateToProps)(AccountContainer)
