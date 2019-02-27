import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Redirect, Route, Switch } from 'react-router-dom'

import Header from '../Header'
import PlacesScene from './Places/PlacesScene'

const styles = () => ({
  root: {},
  container: {
    marginTop: 64,
  }
})

class PlacesLayout extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Header />
        <div className={classes.container}>
          <Switch>
            <Route exact path="/places" component={PlacesScene} />
            <Redirect to="/places" />
          </Switch>
        </div>
      </div>
    )
  }
}

PlacesLayout.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(PlacesLayout)
