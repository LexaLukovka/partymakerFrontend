import React from 'react'
import { object, func, arrayOf } from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import roomShape from 'shapes/room'
import { withStyles } from '@material-ui/core'
import classNames from 'classnames'
import NewRoom from './NewRoom'
import Room from './Room'

const styles = {
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column'
  },

  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  }
}

const Rooms = ({ classes, rooms, onCreate }) => {
  if (isEmpty(rooms)) {
    return (
      <div className={classNames([classes.root, classes.centered])}>
        <NewRoom onCreate={onCreate} />
      </div>
    )
  }

  return (
    <div className={classes.root}>
      {rooms.map(room => <Room key={room.id} room={room} />)}
    </div>
  )
}

Rooms.propTypes = {
  classes: object.isRequired,
  rooms: arrayOf(roomShape).isRequired,
  onCreate: func.isRequired,
}

export default withStyles(styles)(Rooms)
