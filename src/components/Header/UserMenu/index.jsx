import React from 'react'
import { func, object } from 'prop-types'
import { Menu, MenuItem, withStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const styles = theme => ({
  menuItem: {
    width: 150,
    '&:focus': {
      outline: 'none',
    },
  },
  mobile: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
})

const UserMenu = ({ classes, user, anchorEl, onCloseMenu, onLogout }) =>
  <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onCloseMenu}>
    <div className={classes.menuItem} onClick={onCloseMenu}>
      {user
        ? <div className={classes.item}>
          <div className={classes.mobile}>
            <MenuItem component={Link} to="/user">Мой профиль</MenuItem>
          </div>
          <MenuItem component={Link} to="/home">Home</MenuItem>
          <MenuItem onClick={onLogout}>Выйти</MenuItem>
        </div>
        : <React.Fragment>
          <MenuItem component={Link} to="/auth/login">Войти</MenuItem>
          <MenuItem component={Link} to="/auth/register">Зарегистрироваться</MenuItem>
        </React.Fragment>
      }
    </div>
  </Menu>

UserMenu.propTypes = {
  user: object,
  onLogout: func,
  anchorEl: object,
  onCloseMenu: func,
  classes: object.isRequired,
}

UserMenu.defaultProps = {
  user: null,
  anchorEl: null,
}

export default withStyles(styles)(UserMenu)
