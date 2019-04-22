import React from 'react'
import { object } from 'prop-types'
import roomShape from 'shapes/room'
import { Button, Typography, withStyles } from '@material-ui/core'
import OutlineCard from 'components/elements/OutlineCard'
import party from './party.jpg'
import { Link } from 'react-router-dom'

const styles = {
  root: {
    position: 'relative',
    background: `url(${party})`,
    marginBottom: 15,
    backgroundSize: 'cover',
    height: 300,
    zIndex: 10,
    '&::after': {
      zIndex: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.2)',
      content: '" "'
    }
  },
  content: {
    padding: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 20,
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    flexGrow: 1,
  },
  body: {
    textAlign: 'right'
  }
}

const Room = ({ classes, room }) =>
  <OutlineCard className={classes.root}>
    <div className={classes.content}>
      <div className={classes.title}>
        <Typography color="secondary" gutterBottom variant="h4">{room.title}</Typography>
        <Typography variant="caption">{room.address}</Typography>
      </div>
      <div className={classes.body}>
        <Link to={`/room/${room.id}`}>
          <Button color="secondary" variant="outlined">
            ОТКРЫТЬ
          </Button>
        </Link>
      </div>
    </div>
  </OutlineCard>

Room.propTypes = {
  classes: object.isRequired,
  room: roomShape.isRequired
}

export default withStyles(styles)(Room)
