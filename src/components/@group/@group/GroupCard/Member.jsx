/* eslint-disable no-confusing-arrow */
import React from 'react'
import { bool, func, object } from 'prop-types'
import { Link } from 'react-router-dom'
import { Button, Typography, withStyles } from '@material-ui/core'

const styles = (theme) => ({
  amInButton: {
    display: 'block',
  },
  loginLink: {
    color: theme.palette.primary.main,
  },
})

const Member = ({ classes, auth, group, memberLoading, isMember, toggleJoinParty }) =>
  auth.user ?
    auth.user.id !== group.admin_id &&
    <Button
      className={classes.amInButton}
      color="primary"
      disabled={memberLoading}
      onClick={toggleJoinParty}
    >
      {isMember ? 'ПОКИНУТЬ' : 'Я ПОЙДУ'}
    </Button>
    :
    <Typography align="center" gutterBottom>
      <Link to="/auth/login" className={classes.loginLink}>Войдите </Link>
      что бы принять участие в компании
    </Typography>

Member.propTypes = {
  classes: object.isRequired,
  auth: object.isRequired,
  memberLoading: bool.isRequired,
  toggleJoinParty: func.isRequired,
  isMember: bool,
  group: object,
}

Member.defaultProps = {
  group: {},
  isMember: null,
}

export default withStyles(styles)(Member)
