import React from 'react'
import { Typography, withStyles } from '@material-ui/core'
import { object } from 'prop-types'

const styles = () => ({
  root: {
    align: 'center',
  },
  flex: {
    display: 'flex',
  },
  name: {
    marginBottom: 5,
  },
  user: {
    fontWeight: 555,
  },
})
const UserInfo = ({ classes, user }) =>
  <div className={classes.root}>
    <Typography variant="headline" className={classes.name}>{user.name}</Typography>
    <div className={classes.flex}>
      <Typography className={classes.user}>email:</Typography>
      <Typography>&nbsp;{user.email}</Typography>
    </div>
    {user.phone &&
    <div className={classes.flex}>
      <Typography className={classes.user}>телефон:</Typography>
      <Typography>&nbsp;{user.phone}</Typography>
    </div>}
    {user.instagram &&
    <div className={classes.flex}>
      <Typography className={classes.user}>instagram:</Typography>
      <Typography>&nbsp;@{user.instagram}</Typography>
    </div>}
    {user.telegram &&
    <div className={classes.flex}>
      <Typography className={classes.user}>telegram:</Typography>
      <Typography>&nbsp;@{user.telegram}</Typography>
    </div>}
  </div>

UserInfo.propTypes = {
  classes: object.isRequired,
  user: object.isRequired,
}

export default withStyles(styles)(UserInfo)
