// @flow

import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Welcome from 'modules/welcome/Welcome'
import Main from 'modules/main/components/Main'
import Header from 'components/header/Header'

const App = () => (
  <Fragment>
    <div id="popup-root" />
    <Route exact path="/" component={Welcome} />
    <Header />
    <Route exact path="/main" component={Main} />
  </Fragment>
)

export default App
