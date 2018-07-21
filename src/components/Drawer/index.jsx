import React from 'react'
import Drawer from '@material-ui/core/Drawer'

import { bool, object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import DrawerMenu from './DrawerMenu'
import connector from './connector'

const styles = {}

class MyDrawer extends React.Component {
  handleClose = () => {
    this.props.actions.drawer.close()
  }

  render() {
    const { isOpen } = this.props
    return (
      <Drawer open={isOpen} onClose={this.handleClose}>
        <div
          tabIndex={0}
          role="button"
          onClick={this.handleClose}
          onKeyDown={this.handleClose}
          style={{ width: 280 }}
        >
          <DrawerMenu />
        </div>
      </Drawer>
    )
  }
}

MyDrawer.propTypes = {
  isOpen: bool.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(MyDrawer))
