/* eslint-disable no-confusing-arrow */
import React from 'react'
import { Button, Typography, withStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { bool, object } from 'prop-types'

const styles = (theme) => ({
  amInButton: {
    margin: '0 auto',
    maxWidth: 500,
    display: 'block',
  },
  loginLink: {
    color: theme.palette.primary.main,
  },
})

const Member = ({ classes, auth, group, memberLoading, isMember }) =>
  auth.user ?
    auth.user.id !== group.admin_id &&
    <Button
      variant="raised"
      size="large"
      fullWidth
      className={classes.amInButton}
      color="primary"
      disabled={memberLoading}
      onClick={this.toggleJoinParty}
    >{isMember ? 'ПОКИНУТЬ' : 'Я ПОЙДУ'}
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
  isMember: bool,
  group: object,
}

Member.defaultProps = {
  group: {},
  isMember: null,
}

export default withStyles(styles)(Member)
