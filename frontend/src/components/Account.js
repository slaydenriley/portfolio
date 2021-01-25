import React from 'react'

const Account = (props) => {

  return (
    <div>
      {props.account.map(user => <div key={user.id}><em>Logged in: {user.name}</em></div>)}
    </div>

  )
}

export default Account
