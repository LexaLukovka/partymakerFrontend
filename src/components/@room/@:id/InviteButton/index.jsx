import React, { Component } from 'react'
import { IconButton, SvgIcon, withStyles } from '@material-ui/core'
import PersonAddIcon from 'mdi-react/PersonAddIcon'
import InviteDialog from './InviteDialog'

const styles = {
  root: {},
}

class InviteButton extends Component {
  state = {
    isDialogOpen: false
  }

  open = () => {
    this.setState({ isDialogOpen: true })
  }

  close = () => {
    this.setState({ isDialogOpen: false })
  }

  render() {
    const { isDialogOpen } = this.state

    return <>
      <IconButton onClick={this.open}>
        <SvgIcon color="primary">
          <PersonAddIcon />
        </SvgIcon>
      </IconButton>
      <InviteDialog isOpen={isDialogOpen} onClose={this.close} />
    </>
  }
}

export default withStyles(styles)(InviteButton)
