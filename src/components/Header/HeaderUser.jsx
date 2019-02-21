/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,react/sort-comp */
import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import { Button, IconButton, Typography, withStyles } from '@material-ui/core'
import AccountCircle from 'mdi-react/AccountCircleIcon'
import UserAvatar from 'components/User/UserAvatar'
import UserMenu from './UserMenu'
import connector from './connector'

const styles = theme => ({
  root: {
    display: 'flex',
  },

  desktop: {
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
  flex: {
    display: 'flex',
  },
  userName: {
    alignSelf: 'center',
    paddingLeft: 10,
  },
})

class HeaderUser extends React.Component {
  _isMounted = false

  state = {
    anchorEl: null,
  }

  componentDidMount() {
    this._isMounted = true
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

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    const { classes, user } = this.props
    const { anchorEl } = this.state

    return (
      <div className={classes.root}>

        <div className={classes.desktop}>
          {user
            ? <div className={classes.flex} onClick={this.handleMenu}>
              <UserAvatar small user={user} />
              <Typography className={classes.userName} variant="subtitle1" color="inherit">
                {user.name}
              </Typography>
            </div>
            : <React.Fragment>
              <Link to="/auth/login"><Button color="inherit">Войти</Button></Link>
              <Link to="/auth/register"><Button color="inherit">Зарегистрироваться</Button></Link>
            </React.Fragment>
          }
        </div>

        <div className={classes.mobile}>
          <IconButton onClick={this.handleMenu} color="inherit">
            <AccountCircle />
          </IconButton>
        </div>

        <UserMenu
          user={user}
          anchorEl={anchorEl}
          onLogout={this.logout}
          onCloseMenu={this.handleClose}
        />

      </div>
    )
  }
}

HeaderUser.propTypes = {
  user: object,
  classes: object.isRequired,
  actions: object.isRequired,
}

HeaderUser.defaultProps = {
  user: null,
}

export default withStyles(styles)(connector(HeaderUser))
