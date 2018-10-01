import React from 'react'
import { object } from 'prop-types'
import { Grid, withStyles } from '@material-ui/core'
import UserInfo from 'components/User/UserInfo'
import UserAvatar from 'components/User/UserAvatar'

const styles = () => ({
  avatar: {
    alignItems: 'center',
    width: 70,
    height: 70,
    marginBottom: 10,
  },
})

const User = ({ classes, user }) =>
  <Grid container justify="center">
    <UserAvatar user={user} />
    <UserInfo user={user} />
  </Grid>

User.propTypes = {
  classes: object.isRequired,
  user: object.isRequired,
}

export default withStyles(styles)(User)
