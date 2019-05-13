import React, { Component } from 'react'
import { object, shape, func } from 'prop-types'
import userShape from 'shapes/user'
import { withStyles } from '@material-ui/core'
import OutlineCard from 'components/elements/OutlineCard'
import UserAvatar from 'components/elements/UserAvatar'
import UserForm from './UserForm'
import PasswordForm from './PasswordForm'
import connector from './connector'

const styles = {
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    margin: 20,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  card: {
    width: 450,
    marginBottom: 30,
  },
  avatar: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
}

class SettingsScene extends Component {

  render() {
    const { classes, user, actions } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <UserAvatar className={classes.avatar} user={user} />
          <OutlineCard className={classes.card} title="Общее">
            <UserForm user={user} onSubmit={actions.auth.user.update} />
          </OutlineCard>
          <OutlineCard className={classes.card} title="Пароль">
            <PasswordForm onSubmit={actions.auth.password.update} />
          </OutlineCard>
        </div>
      </div>
    )
  }
}

SettingsScene.propTypes = {
  classes: object.isRequired,
  user: userShape.isRequired,
  actions: shape({
    auth: shape({
      user: shape({
        update: func.isRequired,
      }),
      password: shape({
        update: func.isRequired,
      })
    })
  })
}

export default withStyles(styles)(connector(SettingsScene))
