/* eslint-disable no-confusing-arrow */
import React from 'react'
import { bool, object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import CreateIcon from 'mdi-react/CreateIcon'

const styles = {
  root: {
    marginTop: -10,
  },
}

const ProfileEdit = ({ classes, visible }) =>
  visible ?
    <div className={classes.root}>
      <Link to="/settings">
        <IconButton>
          <CreateIcon />
        </IconButton>
      </Link>
    </div>
    :
    <div>
      &nbsp;
    </div>

ProfileEdit.propTypes = {
  classes: object.isRequired,
  visible: bool.isRequired,
}

export default withStyles(styles)(ProfileEdit)
