import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledIdeaMenu = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  width: 70vw;
`

const StyledNewIdea = styled.div`
  background-color: lightblue;
  width: 80px;
  display:flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`

const TempItem = styled.div`
  border: 1px solid black;
`

const StyledIdeaContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 70vw;
  padding: 10px;
  flex-wrap: wrap;
`

const StyledIdea = styled.div`
  background-color: rgb(255, 255, 136);
  width: 150px;
  padding: 15px;
  padding-top: 0px;
  margin: 20px;
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
      ideas: response.data.ideas.reverse()
    })
  }

  componentDidMount = () => {
    this.getUser()
  }

  handleNew = async () => {
    const userId = this.props.match.params.userId
    await axios.post(`/api/users/${userId}/ideas`)
    await this.getUser()
  }

  handleDelete = async (ideaId) => {
    const userId = this.props.match.params.userId
    await axios.delete(`/api/users/${userId}/ideas/${ideaId}`)
    await this.getUser()
  }

  handleChange = (event, i) => {
    //take it out
    const ideas = [...this.state.ideas]
    //change it
    ideas[i][event.target.name] = event.target.value
    //put it back
    this.setState({ ideas })
  }

  updateIdea = async (i) => {
    const userId = this.props.match.params.userId
    const updatedIdea = this.state.ideas[i]
    await axios.put(`/api/users/${userId}/ideas/${updatedIdea._id}`, updatedIdea)
  }

  render() {
    const ideasList = this.state.ideas.map((idea, i) => {
      return (
        <StyledIdea key={i}>
          <div onClick={() => this.handleDelete(idea._id)}> X </div>

          <input type='text' name='title' value={idea.title}
            onChange={(event) => this.handleChange(event, i)}
            onBlur={() => this.updateIdea(i)} />

          <input type='text' name='description' value={idea.description}
            onChange={(event) => this.handleChange(event, i)}
            onBlur={() => this.updateIdea(i)} />
        </StyledIdea>
      )
    })

    return (
      <StyledPageWrapper>
        <h1>Idea Board for {this.state.user.userName}</h1>
        <StyledIdeaMenu>
          <StyledNewIdea onClick={this.handleNew}>New Idea</StyledNewIdea>
          <TempItem>Thing to Sort</TempItem>
          <TempItem>Thing to Use Sometimes</TempItem>
        </StyledIdeaMenu>
        <StyledIdeaContainer>
          {ideasList}
        </StyledIdeaContainer>
      </StyledPageWrapper>
    )
  }
}
