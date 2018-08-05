/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import AccountCircle from '@material-ui/icons/es/AccountCircle'
import { MenuItem, Menu, IconButton } from '@material-ui/core'
import connector from './connector'

const styles = {
  root: {
    display: 'flex',
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

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  logout = () => {
    const { actions } = this.props
    actions.auth.logout()
  }

  render() {
    const { classes, auth } = this.props
    const { anchorEl } = this.state

    return (
      <div className={classes.root}>

        <IconButton onClick={this.handleMenu} color="inherit">
          <AccountCircle />
        </IconButton>

        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
          <div className={classes.menuItem} onClick={this.handleClose}>
            {auth.user ?
              <MenuItem onClick={this.logout}>Выйти</MenuItem>
              :
              <React.Fragment>
                <MenuItem component={Link} to="/login">Войти</MenuItem>
                <MenuItem component={Link} to="/register">Зарегистрироваться</MenuItem>
              </React.Fragment>
            }
          </div>
        </Menu>

      </div>
    )
  }
}

UserMenu.propTypes = {
  classes: object.isRequired,
  auth: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(UserMenu))
