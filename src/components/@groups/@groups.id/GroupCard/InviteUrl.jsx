import React from 'react'
import { object } from 'prop-types'
import { IconButton, TextField, Typography, withStyles } from '@material-ui/core'
import Assignment from 'mdi-react/AssignmentIcon'

const styles = () => ({
  root: {
    marginTop: 20,
    marginLeft: 10,
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
})

const InviteUrl = ({ classes, group }) =>
  <div className={classes.root}>
    <Typography variant="subheading">ССЫЛКА НА КОМПАНИЮ</Typography>
    <div className={classes.flex}>
      <TextField
        fullWidth
        margin="dense"
        defaultValue={group.invite_url}
        disabled
      />
      <IconButton>
        <Assignment />
      </IconButton>
    </div>
  </div>

InviteUrl.propTypes = {
  classes: object.isRequired,
  group: object,
}

InviteUrl.defaultProps = {
  group: {},
}

export default withStyles(styles)(InviteUrl)
