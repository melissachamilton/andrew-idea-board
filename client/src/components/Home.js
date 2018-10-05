// Importing react and link so I can use them in this component.  Exporting so I can use the component in other files (app.js)
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome!!!</h1>
        {/* Link to the Log in page. */}
        <Link to='/login'>Log In</Link>
      </div>
    )
  }
}
