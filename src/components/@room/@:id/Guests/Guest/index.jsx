import React, { Component } from 'react'
import { object, func, bool } from 'prop-types'
import userShape from 'shapes/user'
import { ListItem, Typography, withStyles } from '@material-ui/core'
import UserAvatar from 'components/elements/UserAvatar'
import CloseButton from 'components/elements/CloseButton'
import KickGuestDialog from './KickGuestDialog'

const styles = {
  root: {
    '&:hover': {
      background: 'rgba(0,0,0,0.08)'
    },
    '&:hover aside': {
      display: 'flex'
    },
    '&:hover label': {
      display: 'none'
    }
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 15px',
    flexGrow: 1,
    alignItems: 'center',
    minHeight: 48,
  },
  actions: {
    display: 'none'
  },
}

class Guest extends Component {

  state = {
    isKickGuestDialogOpen: false,
  }

  openKickGuestDialog = () => {
    this.setState({ isKickGuestDialogOpen: true })
  }

  closeKickGuestDialog = () => {
    this.setState({ isKickGuestDialogOpen: false })
  }

  kickGuest = () => {
    const { guest, onKick } = this.props
    this.closeKickGuestDialog()
    onKick(guest)
  }

  render() {
    const { classes, admin, isMeAdmin, guest } = this.props
    const { isKickGuestDialogOpen } = this.state

    return (
      <ListItem className={classes.root}>
        <UserAvatar user={guest} />
        <div className={classes.listItem}>
          <Typography variant="body1">{guest.name}</Typography>
          {admin?.id === guest.id && (
            <Typography component="label" color="textSecondary" variant="caption">админ</Typography>
          )}
          {isMeAdmin && (
            <aside className={classes.actions}>
              <CloseButton onClick={this.openKickGuestDialog} />
            </aside>
          )}
        </div>
        <KickGuestDialog
          guest={guest}
          isOpen={isKickGuestDialogOpen}
          onCancel={this.closeKickGuestDialog}
          onConfirm={this.kickGuest}
        />
      </ListItem>
    )
  }
}

Guest.propTypes = {
  classes: object.isRequired,
  isMeAdmin: bool.isRequired,
  admin: userShape,
  guest: userShape.isRequired,
  onKick: func.isRequired,
}

export default withStyles(styles)(Guest)
