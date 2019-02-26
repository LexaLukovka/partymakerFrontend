import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { IconButton, Snackbar } from '@material-ui/core'
import CloseIcon from 'mdi-react/CloseIcon'
import connector from './connector'

const styles = {
  root: {},
}

class Alert extends React.Component {
  handleClose = () => {
    this.props.actions.alert.hide()
  }

  render() {
    const { classes, isVisible, message } = this.props

    return (
      <Snackbar
        className={classes.root}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={isVisible}
        autoHideDuration={6000}
        onClose={this.handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{message}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={this.handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    )
  }
}

Alert.propTypes = {
  message: PropTypes.node.isRequired,
  isVisible: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
}

export default withStyles(styles)(connector(Alert))
