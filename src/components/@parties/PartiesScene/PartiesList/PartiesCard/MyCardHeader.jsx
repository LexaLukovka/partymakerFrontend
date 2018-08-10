import React from 'react'
import { object } from 'prop-types'
import { CardHeader, IconButton, Avatar, withStyles } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import initialsFromUsername from 'utils/initialsFromUsername'
import moment from 'moment'

const styles = theme => ({
  avatarInitials: {
    background: theme.palette.primary.main,
  },
})

const MyCardHeader = ({ classes, party }) =>
  <CardHeader
    avatar={party.admin.avatar_url
      ? <Avatar src={party.admin.avatar_url} />
      : <Avatar className={classes.avatarInitials}>{initialsFromUsername(party.admin.name)}</Avatar>}
    action={<IconButton><MoreVertIcon /></IconButton>}
    title={party.admin.name}
    subheader={moment(party.updated_at)
      .fromNow()}
  />

MyCardHeader.propTypes = {
  classes: object.isRequired,
  party: object.isRequired,
}

export default withStyles(styles)(MyCardHeader)
