import React from 'react'
import {connect} from 'react-redux'
import fetchUsers from '../../actions/fetchUsers'
import updateUser from '../../actions/updateUser'
import ManageUsers from '../../components/dashboard/ManageUsers'
import { BlockReserveLoading } from 'react-loadingg';

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

  handleDelete = (event) => {
    event.preventDefault()
    console.log("clicked")
  }

  handleLoading = () => {
    if (this.props.users.requesting) {
      return <BlockReserveLoading />;
    }
    else {
      return (
        <div onChange={this.handleChange}>
          <ManageUsers submit={this.handleSubmit} users={this.props.users.users} delete={this.handleDelete}/>
        </div>
      )
    }
  }

  render() {
    return (
      <>
        {this.handleLoading()}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}



export default connect(mapStateToProps, {fetchUsers, updateUser})(ManageUsersContainer)
