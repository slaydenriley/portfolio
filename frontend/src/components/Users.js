import React from 'react'

const Users = (props) => {
  return (
    <div>
      {props.user.map(user => <li key={user.id}>{user.name})</li>)}
    </div>
  )
}

export default Users
