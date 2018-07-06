import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/es/Card/Card'
import Avatar from '@material-ui/core/es/Avatar/Avatar'
import Typography from '@material-ui/core/es/Typography/Typography'
import Icon from '@material-ui/core/es/Icon/Icon'
import Contact from './Contact'
import connector from '../connector'

const styles = theme => ({
  user: {
    padding: theme.spacing.size2,
    display: 'flex',
    alignItems: 'center',
  },

  user_avatar: {
    flex: '0 0 150px', /* do not grow, do not shrink, start at 250px */
    width: 150,
    height: 150,
    borderRadius: 3,
  },

  user_info: {
    flex: 1,
  },
  contacts: {
    paddingTop: theme.spacing.size2,
    paddingBottom: theme.spacing.size2,
  },

  contact_icon: {
    margin: `${theme.spacing.size1} ${theme.spacing.size3}`,
  },
})
const UserCard = ({ classes, cargo }) =>
  <Card>
    <div className={classes.user}>
      <Avatar className={classes.user_avatar} src="http://lorempixel.com/200/200/" />
      <div className={classes.user_info}>
        <Typography align="center" variant="headline">
          {cargo.user.name}
        </Typography>
      </div>
    </div>
    <div className={classes.contacts}>
      <Contact>
        <Icon className={classes.contact_icon}>local_phone</Icon>
        <Typography variant="subheading">{cargo.user.phone}</Typography>
      </Contact>
      <Contact>
        <Icon className={classes.contact_icon}>email</Icon>
        <Typography variant="subheading"> {cargo.user.email}</Typography>
      </Contact>
    </div>
  </Card>

UserCard.propTypes = {
  classes: PropTypes.object.isRequired,
  cargo: PropTypes.shape({
    user: PropTypes.shape({
      avatar_url: PropTypes.string,
      name: PropTypes.string.isRequired,
      succeeded: PropTypes.number,
      phone: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  }).isRequired,
}

export default connector(withStyles(styles)(UserCard))
