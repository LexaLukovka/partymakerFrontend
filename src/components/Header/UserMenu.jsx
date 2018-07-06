import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AccountCircle from '@material-ui/icons/es/AccountCircle'
import IconButton from '@material-ui/core/es/IconButton/IconButton'
import Menu from '@material-ui/core/es/Menu/Menu'
import MenuItem from '@material-ui/core/es/MenuItem/MenuItem'
import Typography from '@material-ui/core/es/Typography/Typography'

const styles = {
  user_name: {
    // marginTop: 7,
    textTransform: 'uppercase',
  },
}

class UserMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
    }
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { classes, user, push, onLogout } = this.props
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <React.Fragment>
        <IconButton
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>

        <Typography
          className={classes.user_name}
          variant="subheading"
          color="inherit"
          onClick={this.handleMenu}
        >
          <a>{user.name}</a>
        </Typography>

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={push}>Settings</MenuItem>
          <MenuItem onClick={onLogout}>Logout</MenuItem>
        </Menu>
      </React.Fragment>
    )
  }
}

UserMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  push: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
}

export default withStyles(styles)(UserMenu)
