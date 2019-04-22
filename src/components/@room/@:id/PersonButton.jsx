import React from 'react'
import { IconButton, SvgIcon, withStyles } from '@material-ui/core'
import PersonAddIcon from 'mdi-react/PersonAddIcon'

const styles = {
  root: {},
}

const PersonButton = () =>
  <IconButton>
    <SvgIcon color="primary">
      <PersonAddIcon />
    </SvgIcon>
  </IconButton>

export default withStyles(styles)(PersonButton)
