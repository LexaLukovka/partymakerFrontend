/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AccountCircle from '@material-ui/icons/es/AccountCircle'
import IconButton from '@material-ui/core/es/IconButton/IconButton'
import Menu from '@material-ui/core/es/Menu/Menu'
import MenuItem from '@material-ui/core/es/MenuItem/MenuItem'
import connector from './connector'

const styles = {
  root: {
    display: 'flex',
  },
  user_name: {
    textTransform: 'uppercase',
  },
  menuItem: {
    '&:focus': {
      outline: 'none',
    },
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

  handleClose = async () => {
    await this.setState({ anchorEl: null })
  }

  render() {
    const { classes, user, push, onLogout, onLogin, onRegister } = this.props
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <div className={classes.root}>
        <IconButton
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>

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
          <div className={classes.menuItem} onClick={this.handleClose}>
            {user ?
              <React.Fragment>
                <MenuItem onClick={push}>{user.name}</MenuItem>
                <MenuItem onClick={onLogout}>Logout</MenuItem>
              </React.Fragment>
              :
              <React.Fragment>
                <MenuItem onClick={onLogin}>Войти</MenuItem>
                <MenuItem onClick={onRegister}>Зарегистрироваться</MenuItem>
              </React.Fragment>
            }
          </div>
        </Menu>
      </div>
    )
  }
}

UserMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object,
  push: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
}
UserMenu.defaultProps = {
  user: null,
}

export default withStyles(styles)(connector(UserMenu))
