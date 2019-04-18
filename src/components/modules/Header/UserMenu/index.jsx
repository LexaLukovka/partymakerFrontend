import React, { Component } from 'react'
import { func, object, shape, string } from 'prop-types'
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
    const { classes, user, onLogout } = this.props
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
            ? <>
              <MenuItem component={Link} to="/home">Home</MenuItem>
              <MenuItem onClick={onLogout}>Выйти</MenuItem>
            </>
            : <>
              <MenuItem component={Link} to="/auth/login">Войти</MenuItem>
              <MenuItem component={Link} to="/auth/register">Зарегистрироваться</MenuItem>
            </>
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
  onLogout: func.isRequired,
}

UserMenu.defaultProps = {
  user: null,
}

export default withStyles(styles)(UserMenu)
