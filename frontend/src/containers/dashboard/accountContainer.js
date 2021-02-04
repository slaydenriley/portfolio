import React from 'react'
import {connect} from 'react-redux'

import fetchAccount from '../actions/fetchAccount'
import Account from '../components/Account'

class AccountContainer extends React.Component {
  componentDidMount() {
    //this.props.fetchAccount()
  }

  render() {
    return (
      <div>
        <Account />
      </div>
    )
  }
}


export default AccountContainer
