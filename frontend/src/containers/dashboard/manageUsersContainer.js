import React from 'react'
import {connect} from 'react-redux'
import fetchUsers from '../../actions/fetchUsers'
import updateUser from '../../actions/updateUser'
import ManageUsers from '../../components/dashboard/ManageUsers'

class ManageUsersContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      admin: '',
      id: ''
    }
  }
  componentDidMount() {
    this.props.fetchUsers()
  }

  handleChange = (event) => {
    this.setState({
      admin: event.target.value,
      id: event.target.id
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let formData = this.state
    this.props.updateUser(formData)
  }
  render() {
    return (
      <div onSubmit={this.handleSubmit} onChange={this.handleChange}>
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



export default connect(mapStateToProps, {fetchUsers, updateUser})(ManageUsersContainer)
