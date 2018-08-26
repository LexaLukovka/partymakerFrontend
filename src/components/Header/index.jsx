/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react'
import { object } from 'prop-types'
import { withRouter } from 'react-router'
import { withStyles, AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core'
import connector from './connector'
import UserMenu from './UserMenu'
import shortTitle from 'utils/shortTitle'
import ArrowBack from 'mdi-react/ArrowBackIcon'
import MenuIcon from 'mdi-react/MenuIcon'
import { Link } from 'react-router-dom'

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
  actionButtons: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  iconButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
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
            <div className={classes.iconButton}>
              {this.renderIcon()}
            </div>

            <Typography variant="title" color="inherit" align="left" className={classes.flex}>
              <Link to={header.link}>{shortTitle(header.title)}   </Link>
            </Typography>

            <div className={classes.actionButtons}>
              <Link to="/places"><Button color="inherit">Куда пойти погулять?</Button></Link>
              <Link to="/parties/create"><Button color="inherit">Собрать свою компанию</Button></Link>
              <Link to="/parties"><Button color="inherit">Найти компанию погулять</Button></Link>
            </div>
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
