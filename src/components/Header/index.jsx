/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AppBar, IconButton, Tab, Tabs, Toolbar, Typography, withStyles } from '@material-ui/core'
import UserMenu from './UserMenu'
import shortTitle from 'utils/shortTitle'
import ArrowBack from 'mdi-react/ArrowBackIcon'
import MenuIcon from 'mdi-react/MenuIcon'
import connector from './connector'

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
  title: {
    flex: 1,
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    },
  },
  actionButtons: {
    marginRight: 10,
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
  state = {
    value: '',
  }

  componentWillMount() {
    this.handleChangeLocation(this.props.location.pathname)
  }

  componentDidUpdate(nextProps, nextStates, snapshot) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      const path = this.props.location.pathname
      this.handleChangeLocation(path)
    }
  }

  handleChangeLocation = (path) => {
    switch (path) {
      case ('/places'):
        return this.setState({ value: 0 })
      case ('/events'):
        return this.setState({ value: 1 })
      case ('/group/create'):
        return this.setState({ value: 2 })
      case (`/users/${this.props.auth.user.id}`):
        return this.setState({ value: 3 })
      default:
        return this.setState({ value: '' })
    }
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

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

            <Typography variant="title" color="inherit" className={classes.title}>
              <Link to={header.link}>{shortTitle(header.title)}</Link>
            </Typography>

            <div className={classes.actionButtons}>
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                fullWidth
              >
                <Tab label={<Link to="/places">Куда пойти погулять?</Link>} />
                <Tab label={<Link to="/events">События Запорожья</Link>} />
                <Tab label={<Link to="/group/create">Собрать компанию</Link>} />
                <Tab label={<Link to="/users">Мой профиль</Link>} />
              </Tabs>
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
  actions: object.isRequired,
  history: object.isRequired,
  location: object.isRequired,
  auth: object.isRequired,
  header: object.isRequired,
}

export default withStyles(styles)(connector(withRouter(Header)))
