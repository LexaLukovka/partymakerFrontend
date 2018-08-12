import React from 'react'
import { object, shape } from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import MyPartiesScene from './@parties/MyPartiesScene'
import UserScene from './UserScene'

const styles = {
  root: {},
}

function UserLayout(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Switch>
        <Route exact path="/user" component={UserScene} />
        <Route exact path="/user/parties" component={MyPartiesScene} />
      </Switch>
    </div>
  )
}


UserLayout.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(UserLayout)
