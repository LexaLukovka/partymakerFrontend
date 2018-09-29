import React from 'react'
import { object } from 'prop-types'
import { Avatar, Grid, Typography, withStyles } from '@material-ui/core'
import initialsFromUsername from 'utils/initialsFromUsername'

const styles = () => ({
  avatar: {
    alignItems: 'center',
    width: 70,
    height: 70,
  },
})

const User = ({ classes, user }) =>
  <React.Fragment>
    <Grid container justify="center">
      <Avatar src={user.avatar_url} className={classes.avatar}>
        {user.avatar_url ? null : initialsFromUsername(user.name)}
      </Avatar>
    </Grid>
    <Typography align="center" variant="headline">{user.name}</Typography>
    <Typography align="center" variant="subheading">{user.email}</Typography>
    <Typography align="center" variant="subheading">{user.phone}</Typography>
  </React.Fragment>

User.propTypes = {
  classes: object.isRequired,
  user: object.isRequired,
}

export default withStyles(styles)(User)
