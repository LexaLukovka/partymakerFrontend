/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react'
import { object } from 'prop-types'
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
  goBack = (url) => () => {
    const { history } = this.props
    if (url) return history.push(url)
    return history.goBack()
  }


  openDrawer = () => {
    this.props.actions.drawer.open()
  }

  renderIcon = () => {
    const { header } = this.props
    if (header.icon === 'back') {
      return (
        <a onClick={this.goBack(header.url)}>
          <IconButton color="inherit">
            <ArrowBack />
          </IconButton>
        </a>
      )
    }

    return (
      <a onClick={this.openDrawer}>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
      </a>
    )
  }

  render() {
    const { classes, header } = this.props
    return (
      <header className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>

            {this.renderIcon()}

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
