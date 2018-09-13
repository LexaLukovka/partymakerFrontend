import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Loading from 'components/Loading'
import isEmpty from 'lodash/isEmpty'
import NotFound from 'components/NotFound/MyParties'
import { Typography } from '@material-ui/core'
import ProfileEdit from './ProfileEdit'
import ProfileAvatar from './ProfileAvatar'
import Parties from './Parties'
import connector from './connector'

const styles = () => ({
  root: {
    height: '100%',
  },
  profile: {
    padding: 15,
    maxWidth: 500,
    margin: '15px auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

class UsersScene extends React.Component {
  componentDidMount() {
    const { actions, match } = this.props
    actions.user.find(match.params.id)
    actions.group.load({ admin_id: match.params.id })
  }

  componentDidUpdate() {
    const { user: { user } } = this.props
    if (!isEmpty(user)) {
      document.title = user.name
    }
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.resetTitle()
  }

  handleUpload = async url => {
    const { actions, match } = this.props
    await actions.settings.change({ avatar_url: url })
    actions.user.find(match.params.id)
  }

  render() {
    const { classes, auth, user: { user, loading } } = this.props
    if (loading) return <Loading />
    if (isEmpty(user)) return <NotFound />

    return (
      <div className={classes.root}>
        <div className={classes.profile}>
          <ProfileAvatar user={user} onChangeAvatar={this.handleUpload} visible={auth.user.id === user.id} />
          <div>
            <Typography align="center" variant="title" className={classes.user}>{user.name}</Typography>
            <Typography align="center" variant="subheading" className={classes.user}>{user.email}</Typography>
            <Typography align="center" variant="subheading" className={classes.user}>{user.phone}</Typography>
          </div>
          <ProfileEdit visible={auth.user.id === user.id} />
        </div>
        <Parties currentUser={auth.user.id === user.id} admin_id={user.id} />
      </div>
    )
  }
}

UsersScene.propTypes = {
  classes: object.isRequired,
  user: object.isRequired,
  actions: object.isRequired,
  match: object.isRequired,
  auth: object.isRequired,
}

export default withStyles(styles)(connector(UsersScene))
