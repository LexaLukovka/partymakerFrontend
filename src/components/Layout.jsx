import React from 'react'
import { Switch, Route } from 'react-router-dom'
import IndexScene from './IndexScene'

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={IndexScene} />
        </Switch>
      </div>
    )
  }
}

export default Layout
