import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/es/Grid/Grid'
import MenuIcon from '@material-ui/icons/Menu'
import Container from '../Container'
import connector from './connector'
import UserMenu from './UserMenu'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: theme.palette.primary.main,
  },
  flex: {
    flex: 1,
    paddingRight: 0,
  },
  icon: {
    fontSize: 32,
  },
})

class Header extends React.Component {
  handleDrawer = () => {
    const { actions } = this.props
    actions.drawer.open()
  }

  render() {
    const { classes, auth, actions, ...props } = this.props

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Container>
            <Toolbar>
              <Grid container justify="flex-start">
                <MenuIcon onClick={this.handleDrawer} className={classes.icon} />
              </Grid>
              <Grid container justify="center">
                <Typography variant="title" color="inherit" align="center" className={classes.flex}>
                  <Link to="/">Partymaker</Link>
                </Typography>
              </Grid>
              <Grid container justify="flex-end">
                <React.Fragment>
                  <UserMenu
                    user={auth.user}
                    onLogin={() => props.history.push('/login')}
                    onRegister={() => props.history.push('/register')}
                    onLogout={() => actions.auth.logout()}
                  />
                </React.Fragment>
              </Grid>
            </Toolbar>
          </Container>
        </AppBar>
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

export default withStyles(styles)(connector(withRouter(Header)))
