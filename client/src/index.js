import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import './styles/main.scss'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import sagas from 'sagas'
import reducers from 'reducers'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(sagas)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root'))
registerServiceWorker()
