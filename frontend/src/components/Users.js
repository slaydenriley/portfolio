import React from 'react'

const Users = (props) => {

  return (
    <div>
      {props.users.map(user => <div key={user.id}><em>Logged in: {user.name}</em></div>)}
    </div>

  )
}

export default Users
