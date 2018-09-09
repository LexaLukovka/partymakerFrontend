/* eslint-disable react/jsx-curly-spacing */
import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { CardHeader, IconButton, withStyles, Chip } from '@material-ui/core'
import MoreVertIcon from 'mdi-react/MoreVertIcon'
import UserAvatar from 'components/UserAvatar'

const styles = theme => ({
  avatarInitials: {
    background: theme.palette.primary.main,
  },
})

const MyCardHeader = ({ classes, party }) =>
  <CardHeader
    avatar={
      <Link to={`/users/${party.admin.id}`}>
        <UserAvatar small user={party.admin} />
      </Link>
    }
    action={
      <span>
        {party.private_party === 1 && <Chip label="private" className={classes.chip} />}
        <IconButton><MoreVertIcon /></IconButton>
      </span>
    }
    title={<Link to={`/users/${party.admin.id}`}>{party.admin.name}</Link>}
    subheader={moment(party.updated_at)
      .fromNow()}
  />

MyCardHeader.propTypes = {
  classes: object.isRequired,
  party: object.isRequired,
}

export default withStyles(styles)(MyCardHeader)
