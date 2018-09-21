/* eslint-disable react/jsx-curly-spacing */
import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { CardHeader, Chip, IconButton, withStyles } from '@material-ui/core'
import MoreVertIcon from 'mdi-react/MoreVertIcon'
import UserAvatar from 'components/UserAvatar'

const styles = theme => ({
  avatarInitials: {
    background: theme.palette.primary.main,
  },
})

const MyCardHeader = ({ classes, group }) =>
  <CardHeader
    avatar={
      <Link to={`/users/${group.admin.id}`}>
        <UserAvatar small user={group.admin} />
      </Link>
    }
    action={
      <span>
        {group.private_party === 1 && <Chip label="private" className={classes.chip} />}
        <IconButton><MoreVertIcon /></IconButton>
      </span>
    }
    title={<Link to={`/users/${group.admin.id}`}>{group.admin.name}</Link>}
    subheader={moment(group.updated_at)
      .fromNow()}
  />

MyCardHeader.propTypes = {
  classes: object.isRequired,
  group: object.isRequired,
}

export default withStyles(styles)(MyCardHeader)
