import React from 'react'
import { object } from 'prop-types'
import userShape from 'shapes/user'
import { withStyles } from '@material-ui/core'
import { Route, Switch } from 'react-router-dom'
import Header from 'components/modules/Header'
import InviteScene from './@:id/InviteScene'
import connector from './connector'

const styles = () => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: 'url(/images/sparks.png)',
    backgroundSize: 'cover'
  },
  container: {
    flexGrow: 1,
    display: 'flex'
  },
  headerRoot: {
    position: 'absolute',
    background: 'transparent',
    boxShadow: 'none',
  },
})

const InviteLayout = ({ classes, user }) =>
  <div className={classes.root}>
    <Header classes={{ root: classes.headerRoot }} user={user} />
    <div className={classes.container}>
      <Switch>
        <Route exact path="/invite/:id" component={InviteScene} />
      </Switch>
    </div>
  </div>

InviteLayout.propTypes = {
  classes: object.isRequired,
  user: userShape.isRequired,
}

export default withStyles(styles)(connector(InviteLayout))
