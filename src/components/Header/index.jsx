/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/es/Grid/Grid'
import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu'
import Container from '../Container'
import connector from './connector'
import UserMenu from './UserMenu'
import DrawerMenu from '../DrawerMenu'

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: 63,
  },
  appBar: {
    background: 'linear-gradient(#BE05C5 30%, #9306BC 90%)',
  },
  flex: {
    flex: 1,
    paddingRight: 0,
  },
  icon: {
    fontSize: 32,
  },
}

class Header extends React.Component {
  state = {
    left: false,
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }

  render() {
    const { classes, auth, actions, ...props } = this.props

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Container>
            <Toolbar>
              <Grid container justify="flex-start">
                <MenuIcon onClick={this.toggleDrawer('left', true)} className={classes.icon} />
              </Grid>
              <Grid container justify="center">
                <Typography variant="title" color="inherit" align="center" className={classes.flex}>
                  <Link to="/">PartyMaker</Link>
                </Typography>
              </Grid>
              <Grid container justify="flex-end">
                <React.Fragment>
                  <UserMenu
                    user={auth.user}
                    push={() => props.history.push('/settings')}
                    onLogin={() => props.history.push('/login')}
                    onRegister={() => props.history.push('/register')}
                    onLogout={() => actions.auth.logout()}
                  />
                </React.Fragment>
              </Grid>
            </Toolbar>
          </Container>
        </AppBar>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
            style={{ width: 280 }}
          >
            <DrawerMenu />
          </div>
        </Drawer>
      </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default withStyles(styles)(withRouter(connector(Header)))
