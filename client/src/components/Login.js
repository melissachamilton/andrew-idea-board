import React, { Component } from 'react'

export default class Login extends Component {
  state = {
    users: [{
      "_id": "5bb6164f7cf9fd3b8820e02e",
      "userName": "Elon",
      "password": "spaceiscool",
      "__v": 0
    }, {
      "_id": "5bb6164f7cf9fd3b8820e02e",
      "userName": "Elon",
      "password": "spaceiscool",
      "__v": 0
    }]
  }

  render() {
    const usersList = this.state.users.map((user, i) => {
      return <div>Name: {user.userName}</div>
    })

    return (
      <div>
        <h1>Login Page</h1>
        {usersList}
      </div>
    )
  }
}
