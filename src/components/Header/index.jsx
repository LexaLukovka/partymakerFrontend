import React from 'react'
import { bool, object, string } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/es/Grid/Grid'
import { HamburgerArrow } from 'react-animated-burgers'
import Container from '../Container'
import connector from './connector'
import UserMenu from './UserMenu'
import titleSubs from '../../utils/titleSubs'

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
})

class Header extends React.Component {
  handleDrawer = () => {
    const { actions } = this.props
    actions.drawer.open()
  }
  handleBack = () => {
    this.props.history.goBack()
  }

  render() {
    const { classes, auth, isBack, isOpen, actions, ...props } = this.props
    return (
      <header className={classes.root}>
        <AppBar className={classes.appBar}>
          <Container>
            <Toolbar>
              <Grid container justify="flex-start">
                <HamburgerArrow
                  isActive={isBack}
                  toggleButton={isBack ? this.handleBack : this.handleDrawer}
                  barColor="white"
                />
              </Grid>
              <Grid container justify="center">
                <Typography variant="title" color="inherit" align="center" className={classes.flex}>
                  {isOpen ? titleSubs(isOpen) : <Link to="/">Partymaker</Link>}
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
      </header>
    )
  }
}

Header.propTypes = {
  classes: object.isRequired,
  auth: object.isRequired,
  isBack: bool.isRequired,
  isOpen: string.isRequired,
  actions: object.isRequired,
  history: object.isRequired,
}

export default withStyles(styles)(connector(withRouter(Header)))
