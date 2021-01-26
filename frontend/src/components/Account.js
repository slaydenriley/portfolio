import React from 'react'

const Account = (props) => {

  return (
    <div className="account">
      <h1>My Account</h1>

      {props.account.map(user =>
        <div key={user.id}>
          <em>Logged in: {user.name}</em>
          <h2>Description</h2>
          <p>{user.description}</p>
          <h2>Email</h2>
          <a href={"mailto:" + user.email}>{user.email}</a>
        </div>)}
    </div>

  )
}

export default Account
