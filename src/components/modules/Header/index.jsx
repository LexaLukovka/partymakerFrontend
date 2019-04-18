import React from 'react'
import { object, func } from 'prop-types'
import userShape from 'shapes/user'
import { withStyles, AppBar, Toolbar, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import Navigation from './Navigation'
import UserMenu from './UserMenu'

const styles = {
  root: {}
}

const Header = ({ classes, user, onLogout }) =>
  <AppBar classes={classes} position="static" color="primary">
    <Toolbar>
      <Link to="/"><Logo /></Link>
      <Navigation>
        {user && <Button color="secondary">мои события</Button>}
      </Navigation>
      {user
        ? <UserMenu user={user} onLogout={onLogout} />
        : <>
          <Link to="/auth/login">
            <Button color="secondary">войти</Button>
          </Link>
          <Link to="/auth/register">
            <Button color="secondary">регистрация</Button>
          </Link>
        </>
      }

    </Toolbar>
  </AppBar>

Header.propTypes = {
  classes: object.isRequired,
  user: userShape,
  onLogout: func,
}

Header.defaultProps = {
  user: null,
  onLogout: () => {}
}

export { UserMenu }

export default withStyles(styles)(Header)
