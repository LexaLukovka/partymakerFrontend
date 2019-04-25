import React, { Component } from 'react'
import { object, shape, func } from 'prop-types'
import roomShape from 'shapes/room'
import matchShape from 'shapes/match'
import { Typography, withStyles, Button } from '@material-ui/core'
import connector from './connector'
import { Link } from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    textShadow: '0 3px 6px #000000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  actions: {
    marginTop: 150,
  }
}

class InviteScene extends Component {

  constructor(props) {
    super(props)
    const { actions, match } = props

    actions.loadRoom(match.params.id)
  }

  render() {
    const { classes, room } = this.props

    return (
      <div className={classes.root}>
        <Typography color="secondary" gutterBottom align="center" variant="h2">Приглашение</Typography>
        <Typography color="secondary" gutterBottom align="center" variant="h2">на</Typography>
        <Typography color="secondary" align="center" variant="h1">{room?.title}</Typography>

        <div className={classes.actions}>
          {room &&
          <Link to={`/room/${room.id}`}>
            <Button
              size="large"
              variant="contained"
              color="primary"
            >
              Принимаю приглашение
            </Button>
          </Link>
          }
        </div>
      </div>
    )

  }
}

InviteScene.propTypes = {
  classes: object.isRequired,
  room: roomShape,
  match: matchShape.isRequired,
  actions: shape({
    loadRoom: func.isRequired,
  })
}

export default withStyles(styles)(connector(InviteScene))
