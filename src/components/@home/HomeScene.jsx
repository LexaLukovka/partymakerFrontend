import React, { Component } from 'react'
import { arrayOf, shape, func, object } from 'prop-types'
import { Paper, Typography, withStyles } from '@material-ui/core'
import userShape from 'shapes/user'
import roomShape from 'shapes/room'
import Header from 'components/modules/Header'
import Parties from './Parties'
import Rooms from './Rooms'
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
    overflow: 'auto',
    flexDirection: 'column'
  },
  mapElement: {
    flexGrow: 1,

    height: `100%`,
    zIndex: 1,
  },
}

class HomeScene extends Component {

  componentDidMount() {
    const { actions } = this.props

    actions.loadRooms()
  }

  createRoom = async () => {
    const { actions, history } = this.props
    const { action } = await actions.createRoom()

    history.push(`/room/${action.payload.id}`)
  }

  render() {
    const { classes, rooms, user } = this.props

    return (
      <div className={classes.root}>
        <Header user={user} />
        <div className={classes.container}>
          <Paper className={classes.paper}>
            <Parties />
            <div className={classes.events}>
              <Typography gutterBottom variant="h5">Мои события</Typography>
              <Rooms rooms={rooms} onCreate={this.createRoom} />
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
  user: userShape.isRequired,
  rooms: arrayOf(roomShape).isRequired,
  history: shape({
    push: func.isRequired,
  }),
  actions: shape({
    createRoom: func.isRequired,
    loadRooms: func.isRequired,
  })
}

export default withStyles(styles)(connector(HomeScene))
