import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

const styles = {
  root: {
    background: 'transparent',
    width: '100%',
    color: 'white',
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

const LandingHeader = ({ classes }) =>
  <AppBar className={classes.root} color="default" elevation={0}>
    <Toolbar>
      <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit" className={classes.grow}>
        <Link to="/">
          Partymaker
        </Link>
      </Typography>

      <Typography variant="h6" color="inherit" className={classes.grow}>
        <Link to="/home">
          Home
        </Link>
      </Typography>

      <Link to="/auth/register"><Button color="inherit">Регистрация</Button></Link>
      <Link to="/auth/login"><Button color="inherit">Войти</Button></Link>
    </Toolbar>
  </AppBar>

LandingHeader.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LandingHeader)
