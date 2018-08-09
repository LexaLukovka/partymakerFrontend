import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Route, Switch } from 'react-router-dom'
import PlacesScene from './PlacesScene'


const styles = theme => ({
  root: {},
})

const PlacesLayout = ({ classes }) =>
  <div className={classes.root}>
    <Switch>
      <Route exact path="/places" component={PlacesScene} />
    </Switch>
  </div>

PlacesLayout.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PlacesLayout)
