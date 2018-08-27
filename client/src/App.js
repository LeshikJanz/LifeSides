// @flow

import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Welcome from './modules/welcome/Welcome'

const App = () => (
  <Fragment>
    <div id="popup-root" />
    <Switch>
      <Route path="/" component={Welcome} />
    </Switch>
  </Fragment>
)

export default App
