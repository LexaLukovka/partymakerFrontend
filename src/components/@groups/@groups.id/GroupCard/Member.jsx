import React from 'react'
import { bool, func, object } from 'prop-types'
import { Button, withStyles } from '@material-ui/core'

const styles = () => ({
  amInButton: {
    display: 'block',
  },
})

const Member = ({ classes, auth, group, memberLoading, isMember, toggleJoinParty }) =>
  auth.user.id !== group.admin_id &&
  <Button
    className={classes.amInButton}
    color="primary"
    disabled={memberLoading}
    onClick={toggleJoinParty}
  >
    {isMember ? 'ПОКИНУТЬ' : 'Я ПОЙДУ'}
  </Button>

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
