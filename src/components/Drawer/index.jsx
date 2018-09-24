import React from 'react'
import { SwipeableDrawer } from '@material-ui/core'
import { bool, object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import DrawerMenu from './DrawerMenu'
import connector from './connector'

const styles = {
  paperAnchor: {
    width: '80%',
  },
}

class MyDrawer extends React.Component {
  handleClose = () => {
    this.props.actions.drawer.close()
  }
  handleOpen = () => {
    this.props.actions.drawer.open()
  }

  render() {
    const { classes, isOpen } = this.props
    return (
      <SwipeableDrawer
        open={isOpen}
        onOpen={this.handleOpen}
        onClose={this.handleClose}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={this.handleClose}
          onKeyDown={this.handleClose}
        >
          <DrawerMenu />
        </div>
      </SwipeableDrawer>
    )
  }
}

MyDrawer.propTypes = {
  classes: object.isRequired,
  isOpen: bool.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(MyDrawer))
