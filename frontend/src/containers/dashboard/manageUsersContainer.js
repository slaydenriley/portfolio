import React from 'react'
import {connect} from 'react-redux'
import fetchUsers from '../../actions/fetchUsers'
import ManageUsers from '../../components/dashboard/ManageUsers'

class ManageUsersContainer extends React.Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    return (
      <div>
        <ManageUsers users={this.props.users.users} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}



export default connect(mapStateToProps, {fetchUsers})(ManageUsersContainer)
