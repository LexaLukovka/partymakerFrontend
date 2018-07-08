/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/es/Grid/Grid'
import Drawer from '@material-ui/core/es/Drawer/Drawer'
import IconButton from '@material-ui/core/es/IconButton/IconButton'
import Divider from '@material-ui/core/es/Divider/Divider'
import List from '@material-ui/core/es/List/List'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Container from '../Container'
import connector from './connector'
import UserMenu from './UserMenu'

const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 63,
  },
  flex: {
    flex: 1,
  },
  icon: {
    fontSize: 32,
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    background: 'linear-gradient(#BE05C5 30%, #9306BC 90%)',
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
  },
  'appBarShift-right': {
    marginRight: drawerWidth,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  'content-left': {
    marginLeft: -drawerWidth,
  },
  'content-right': {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  'contentShift-right': {
    marginRight: 0,
  },
})

class Header extends React.Component {
  state = {
    open: false,
    anchor: 'left',
  }

  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { classes, children, auth, actions, ...props } = this.props
    const { anchor, open } = this.state
    const drawer = (
      <Drawer
        variant="persistent"
        anchor={anchor}
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List><Button fullWidth>Open</Button></List>
        <Divider />
        <List><Button fullWidth>Close</Button></List>
      </Drawer>
    )

    let before = null
    let after = null

    if (anchor === 'left') {
      before = drawer
    } else {
      after = drawer
    }

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
              [classes[`appBarShift-${anchor}`]]: open,
            })}
          >
            <Container>
              <Toolbar disableGutters={!open}>
                <Grid container justify="flex-start">
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={this.handleDrawerOpen}
                    className={classNames(classes.menuButton, open && classes.hide)}
                  >
                    <MenuIcon className={classes.icon} />
                  </IconButton>
                </Grid>
                <Grid container justify="center">
                  <Typography variant="title" color="inherit" className={classes.flex}>
                    <Link to="/">PartyMaker</Link>
                  </Typography>
                </Grid>
                <Grid container justify="flex-end">
                  {auth.user ?
                    <React.Fragment>
                      <UserMenu
                        user={auth.user}
                        push={() => props.history.push('/settings')}
                        onLogout={() => actions.auth.logout()}
                      />
                    </React.Fragment> :
                    <React.Fragment>
                      <Link to="/login"><Button color="inherit">Войти</Button></Link>
                      <Link to="/register"><Button color="inherit">Зарегистрироваться</Button></Link>
                    </React.Fragment>
                  }
                </Grid>
              </Toolbar>
            </Container>
          </AppBar>
          {before}
          <main
            className={classNames(classes.content, classes[`content-${anchor}`], {
              [classes.contentShift]: open,
              [classes[`contentShift-${anchor}`]]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            {children}
          </main>
          {after}
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
}

export default withStyles(styles)(withRouter(connector(Header)))
