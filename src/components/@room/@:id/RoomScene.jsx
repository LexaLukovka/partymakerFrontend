import React, { Component } from 'react'
import { arrayOf, object } from 'prop-types'
import userShape from 'shapes/user'
import { IconButton, SvgIcon, Typography, withStyles } from '@material-ui/core'
import SearchField from 'components/elements/SearchField'
import connector from './connector'
import Guests from './Guests'
import PersonAddIcon from 'mdi-react/PersonAddIcon'

const styles = {
  guests: {
    width: 400,
    padding: 20,
    borderRight: 'solid 1px rgba(0, 0, 0, 0.12)'
  },
  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0 30px 0'
  }
}

class RoomScene extends Component {
  render() {
    const { classes, guests } = this.props

    return (
      <div className={classes.guests}>
        <div className={classes.heading}>
          <Typography variant="h5">
            Приглашенные гости
          </Typography>
          <IconButton>
            <SvgIcon color="primary"><PersonAddIcon /></SvgIcon>
          </IconButton>
        </div>
        <SearchField />
        <Guests guests={guests} />
      </div>
    )
  }
}

RoomScene.propTypes = {
  classes: object.isRequired,
  guests: arrayOf(userShape).isRequired
}

export default withStyles(styles)(connector(RoomScene))
