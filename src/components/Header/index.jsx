/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react'
import { object } from 'prop-types'
import { withRouter } from 'react-router'
import { AppBar, Button, IconButton, Toolbar, Typography, withStyles } from '@material-ui/core'
import connector from './connector'
import shortTitle from 'utils/shortTitle'
import ArrowBack from 'mdi-react/ArrowBackIcon'
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
  title: {
    flex: 1,
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    },
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
    return null
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
              <Link to="/places"><Button color="inherit">Куда пойти погулять?</Button></Link>
            </div>
            {header.icon === 'back' && (<div style={{ width: 48 }} />)}
          </Toolbar>
        </AppBar>
      </header>
    )
  }
}

Header.propTypes = {
  classes: object.isRequired,
  header: object.isRequired,
  history: object.isRequired,
}

export default withStyles(styles)(connector(withRouter(Header)))
