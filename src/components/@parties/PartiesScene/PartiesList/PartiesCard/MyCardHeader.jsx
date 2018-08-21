import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import { CardHeader, IconButton, Avatar, withStyles } from '@material-ui/core'
import MoreVertIcon from 'mdi-react/MoreVertIcon'
import initialsFromUsername from 'utils/initialsFromUsername'
import moment from 'moment'

const styles = theme => ({
  avatarInitials: {
    background: theme.palette.primary.main,
  },
})

const MyCardHeader = ({ classes, party }) =>
  <CardHeader
    avatar={<Link to={`/users/${party.admin.id}`}>
      {party.admin.avatar_url
        ? <Avatar src={party.admin.avatar_url} />
        : <Avatar className={classes.avatarInitials}>{initialsFromUsername(party.admin.name)}</Avatar>}
    </Link>}
    action={<IconButton><MoreVertIcon /></IconButton>}
    title={<Link to={`/users/${party.admin.id}`}>{party.admin.name}</Link>}
    subheader={moment(party.updated_at)
      .fromNow()}
  />

MyCardHeader.propTypes = {
  classes: object.isRequired,
  party: object.isRequired,
}

export default withStyles(styles)(MyCardHeader)
