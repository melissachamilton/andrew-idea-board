import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledIdea = styled.div`
  background-color: yellow;
  border: 1px solid black;
  width: 30vw;
  min-width: 100px;
`

export default class IdeaBoard extends Component {
  state = {
    user: {},
    ideas: []
  }

  getUser = async () => {
    const userId = this.props.match.params.userId
    const response = await axios.get(`/api/users/${userId}`)
    this.setState({
      user: response.data,
      ideas: response.data.ideas
    })
  }

  componentDidMount = () => {
    this.getUser()
  }

  render() {
    const ideasList = this.state.ideas.map((idea, i) => {
      return (
        <StyledIdea key={i}>
          <div>{idea.title}</div>
          <div>{idea.description}</div>
        </StyledIdea>
      )
    })

    return (
      <div>
        <h1>Idea Board for {this.state.user.userName}</h1>
        {ideasList}
      </div>
    )
  }
}
