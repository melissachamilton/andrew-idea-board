import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import IdeaBoard from './components/IdeaBoard'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={IdeaBoard} />
        </Switch>
      </Router>
    )
  }
}

export default App
