/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'
import AppBar from '@material-ui/core/AppBar'
import { Link } from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/es/Grid/Grid'
import Container from '../Container'
import connector from './connector'
import UserMenu from './UserMenu'

const styles = {
  root: {
    // background: theme.palette.primary.main,
    flexGrow: 1,
    marginBottom: 100,
    marginTop: 10,
    // '@media only screen and (max-width: 640px)': {
    //   width: 640,
    // },
  },
  flex: {
    flex: 1,
  },
}

const Header = ({ classes, auth, actions, ...props }) =>
  <div className={classes.root}>
    <AppBar className={classes.appBar} style={{ background: 'linear-gradient(#BE05C5 30%, #9306BC 90%)' }}>
      <Container>
        <Toolbar disableGutters>
          <Grid container justify="flex-start">
            <Typography variant="title" color="inherit" className={classes.flex}>
              <Link to="/">PartyMaker</Link>
            </Typography>
          </Grid>
          <Grid container justify="center">
            <Link to="/cargo"><Button color="inherit">Найти пати</Button></Link>
            <Link to="/cargo/create"><Button color="inherit">Добавить пати</Button></Link>
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
  </div>

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default withStyles(styles)(withRouter(connector(Header)))
