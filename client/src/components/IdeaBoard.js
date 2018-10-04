import React, { Component } from 'react'
import axios from 'axios'

export default class IdeaBoard extends Component {
  state = {
    user: {}
  }

  getUser = async () => {
    const userId = this.props.match.params.userId
    const response = await axios.get(`/api/users/${userId}`)
    this.setState({ user: response.data })
  }

  componentDidMount = () => {
    this.getUser()
  }

  render() {
    return (
      <div>
        <h1>Idea Board for {this.state.user.userName}</h1>
      </div>
    )
  }
}
