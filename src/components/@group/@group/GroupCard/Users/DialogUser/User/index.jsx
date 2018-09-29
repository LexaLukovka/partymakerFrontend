import React from 'react'
import { object } from 'prop-types'
import { Avatar, Grid, withStyles } from '@material-ui/core'
import initialsFromUsername from 'utils/initialsFromUsername'
import UserInfo from 'components/UserInfo'

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
    <Avatar src={user.avatar_url} className={classes.avatar}>
      {user.avatar_url ? null : initialsFromUsername(user.name)}
    </Avatar>
    <UserInfo user={user} />
  </Grid>

User.propTypes = {
  classes: object.isRequired,
  user: object.isRequired,
}

export default withStyles(styles)(User)
