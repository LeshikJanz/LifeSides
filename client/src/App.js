import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Welcome from './modules/welcome/Welcome'

class App extends Component {
  render () {
    return (
      <Router>
        <Route path="/" component={Welcome} />
      </Router>
    )
  }
}

export default App
