import React, { Component } from 'react'
import { object, bool } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Avatar, Typography, Grid, IconButton } from '@material-ui/core'
import Create from 'mdi-react/CreateIcon'
import PartiesScene from '../@parties/PartiesScene'
import Loading from 'components/Loading'
import NotFound from 'components/NotFound'
import isEmpty from 'lodash/isEmpty'
import connector from './connector'
import initialsFromUsername from 'utils/initialsFromUsername'

const styles = theme => ({
  root: {
    padding: 15,
  },
  flex: {
    display: 'flex',
  },
  avatar: {
    width: 100,
    height: 100,
    fontSize: 32,
    backgroundColor: theme.palette.primary.main,
  },
  icon: {
    alignSelf: 'center',
  },
})

class UsersScene extends Component {
  componentWillMount() {
    const { actions, match } = this.props
    actions.user.find(match.params.id)
  }

  componentDidMount() {
    const { actions } = this.props
    actions.header.back()
    actions.header.title('Профиль')
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.menu()
    actions.header.resetTitle()
  }

  render() {
    const { classes, loading, user, match } = this.props
    if (loading) return <Loading />
    if (isEmpty(user)) return <NotFound />
    return (
      <div>
        <div className={classes.root}>
          <div className={classes.flex}>
            <Avatar className={classes.avatar} src={user.user.avatar_url}>
              {user.user.avatar_url ? null : initialsFromUsername(user.user.name)}
            </Avatar>
            <Grid container justify="center">
              <Typography align="left" variant="title">{user.user.name}</Typography>
              <Typography align="left" variant="subheading">{user.user.email}</Typography>
              <Typography align="left" variant="subheading">{user.user.phone}</Typography>
            </Grid>
          </div>
        </div>
        <PartiesScene id={match.params.id} />
      </div>
    )
  }
}

UsersScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  loading: bool.isRequired,
  user: object.isRequired,
  match: object.isRequired,
}

export default withStyles(styles)(connector(UsersScene))
