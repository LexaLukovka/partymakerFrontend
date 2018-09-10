import React from 'react'
import { object } from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import CreateScene from './@create/CreateScene'
import { withStyles } from '@material-ui/core'

const styles = () => ({
  root: {
    height: '96%',
  },
})

const GroupLayout = ({ classes }) =>
  <div className={classes.root}>
    <Switch>
      <Route exact path="/group/create" component={CreateScene} />
    </Switch>
  </div>

GroupLayout.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(GroupLayout)
