/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,react/sort-comp */
import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import { IconButton, Menu, MenuItem, Typography, withStyles } from '@material-ui/core'
import AccountCircle from 'mdi-react/AccountCircleIcon'
import UserAvatar from 'components/User/UserAvatar'
import connector from './connector'

const styles = theme => ({
  root: {
    display: 'flex',
  },

  menuItem: {
    '&:focus': {
      outline: 'none',
    },
  },
  userName: {
    alignSelf: 'center',
    paddingLeft: 10,
  },
  desktop: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  mobile: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
})

class UserMenu extends React.Component {
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

  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
    }
  }

  render() {
    const { classes, auth } = this.props
    const { anchorEl } = this.state

    return (
      <div className={classes.root}>

        <div className={classes.desktop} onClick={this.handleMenu}>
          <UserAvatar small user={auth.user} />
          <Typography className={classes.userName} variant="subheading" color="inherit">
            {auth.user.name}
          </Typography>
        </div>

        <div className={classes.mobile}>
          <IconButton onClick={this.handleMenu} color="inherit">
            <AccountCircle />
          </IconButton>
        </div>

        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
          <div className={classes.menuItem} onClick={this.handleClose}>
            {auth.user ?
              <React.Fragment>
                <div className={classes.mobile}>
                  <MenuItem component={Link} to="/user">Мой профиль</MenuItem>
                </div>
                <MenuItem component={Link} to="/settings">Настройки</MenuItem>
                <MenuItem onClick={this.logout}>Выйти</MenuItem>
              </React.Fragment>
              :
              <React.Fragment>
                <MenuItem component={Link} to="/auth/login">Войти</MenuItem>
                <MenuItem component={Link} to="/auth/register">Зарегистрироваться</MenuItem>
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
