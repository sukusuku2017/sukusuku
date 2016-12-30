import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import configureStore from './configureStore'
import SukusukuApp from './SukusukuApp.jsx'
import Home from './Home.jsx'
import List from './List.jsx'

const store = configureStore()

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={SukusukuApp}>
            <IndexRoute component={Home} />
            <Route path="list/:chapter" component={List}/>
          </Route>
        </Router>
      </Provider>
    )
  }
}

export default Root
