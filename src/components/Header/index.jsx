import React from 'react'
import { bool, object, string } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import connector from './connector'
import UserMenu from './UserMenu'
import shortTitle from 'utils/shortTitle'
import ArrowBack from 'mdi-react/ArrowBackIcon'
import MenuIcon from 'mdi-react/MenuIcon'

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: 'white',
  },
  appBar: {
    background: theme.palette.primary.main,
  },
  toolbar: {
    display: 'flex',
  },
  flex: {
    flex: 1,
  },
})

class Header extends React.Component {
  goBack = () =>
    this.props.history.goBack()

  openDrawer = () =>
    this.props.actions.drawer.open()

  renderIcon = (icon) => {
    switch (icon) {
      case 'menu':
        return <MenuIcon onClick={this.openDrawer} />

      case 'back':
        return <ArrowBack onClick={this.goBack} />

      default:
        return <MenuIcon onClick={this.openDrawer} />
    }
  }

  render() {
    const { classes, header } = this.props
    return (
      <header className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <IconButton color="inherit">
              {this.renderIcon(header.icon)}
            </IconButton>
            <Typography variant="title" color="inherit" align="center" className={classes.flex}>
              {shortTitle(header.title)}
            </Typography>
            <UserMenu />
          </Toolbar>
        </AppBar>
      </header>
    )
  }
}

Header.propTypes = {
  classes: object.isRequired,
  header: object.isRequired,
  actions: object.isRequired,
  history: object.isRequired,
}

export default withStyles(styles)(connector(withRouter(Header)))
