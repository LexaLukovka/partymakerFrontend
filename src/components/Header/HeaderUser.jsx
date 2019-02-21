/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,react/sort-comp */
import React from 'react'
import { object } from 'prop-types'
import { IconButton, withStyles } from '@material-ui/core'
import AccountCircle from 'mdi-react/AccountCircleIcon'
import DesktopAuth from './DesktopAuth'
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
          <DesktopAuth
            user={user}
            onOpenMeu={this.handleMenu}
          />
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
