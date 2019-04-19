import React, { Component } from 'react'
import { object } from 'prop-types'
import { Paper, Typography, withStyles } from '@material-ui/core'
import userShape from 'shapes/user'
import Header from 'components/modules/Header'
import Parties from './Parties'
import Events from './Events'
import Map from './Map'
import connector from './connector'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
  container: {
    flexGrow: 1,
    display: 'flex',
  },
  paper: {
    display: 'flex',
    minWidth: 650,
  },
  events: {
    padding: 15,
    flexGrow: 1,
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column'
  },
  mapElement: {
    flexGrow: 1,

    height: `100%`,
    zIndex: 1,
  },
}

class HomeScene extends Component {
  render() {
    const { classes, user } = this.props

    return (
      <div className={classes.root}>
        <Header user={user} />
        <div className={classes.container}>
          <Paper className={classes.paper}>
            <Parties />
            <div className={classes.events}>
              <Typography variant="h5">Мои события</Typography>
              <Events />
            </div>
          </Paper>
          <Map
            loadingElement={<div className={classes.mapElement} />}
            containerElement={<div className={classes.mapElement} />}
            mapElement={<div className={classes.mapElement} />}
          />
        </div>
      </div>
    )
  }
}

HomeScene.propTypes = {
  classes: object.isRequired,
  user: userShape,
}

HomeScene.defaultProps = {
  user: null
}

export default withStyles(styles)(connector(HomeScene))
