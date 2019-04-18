import React, { Component } from 'react'
import { object, shape, string } from 'prop-types'
import { Menu, MenuItem, withStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import AccountButton from './AccountButton'

const styles = () => ({})

class UserMenu extends Component {

  state = {
    anchorEl: null
  }

  open = (event) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  close = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { classes, user } = this.props
    const { anchorEl } = this.state

    return (
      <div className={classes.root}>
        <AccountButton onClick={this.open} />
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.close}
        >
          {user
            ? [
              <MenuItem key="home" component={Link} to="/home">Home</MenuItem>,
              <MenuItem key="logout" component={Link} to="/auth/logout">Выйти</MenuItem>
            ]
            : [
              <MenuItem key="login" component={Link} to="/auth/login">Войти</MenuItem>,
              <MenuItem key="register" component={Link} to="/auth/register">Зарегистрироваться</MenuItem>
            ]
          }
        </Menu>
      </div>
    )
  }
}

UserMenu.propTypes = {
  classes: object.isRequired,
  user: shape({
    name: string.isRequired,
    avatar_url: string.isRequired,
  }),
}

UserMenu.defaultProps = {
  user: null,
}

export default withStyles(styles)(UserMenu)
