import React from 'react'
import {Link} from 'react-router-dom'

const ManageUsers = (props) => {

  return (
    <div className="all-users">
    {props.users.map(user =>
      <div key={user.id} className="user-list">
          <em>{user.name}</em><br/>
          <hr className="line"/>

      </div>)}
    </div>

  )
}

export default ManageUsers
