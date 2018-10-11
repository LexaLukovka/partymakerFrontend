import React from 'react'
import { object } from 'prop-types'
import { Grid, withStyles } from '@material-ui/core'
import UserInfo from 'components/User/UserInfo'
import UserAvatar from 'components/User/UserAvatar'

const styles = theme => ({
  avatar: {
    [theme.breakpoints.up('md')]: {
      marginRight: 10,
    },
  },
})

const User = ({ classes, user }) =>
  <Grid container justify="center">
    <div className={classes.avatar}>
      <UserAvatar user={user} />
    </div>
    <UserInfo user={user} />
  </Grid>

User.propTypes = {
  classes: object.isRequired,
  user: object.isRequired,
}

export default withStyles(styles)(User)
