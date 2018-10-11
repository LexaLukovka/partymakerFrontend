import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import { Button, withStyles } from '@material-ui/core'

import Loading from 'components/Loading'
import NotFound from 'components/NotFound/MyGroups'

import UserInfo from 'components/User/UserInfo'
import ProfileEdit from './ProfileEdit'
import ProfileAvatar from './ProfileAvatar'
import Groups from './Groups'

import isEmpty from 'lodash/isEmpty'
import connector from './connector'

const styles = theme => ({
  root: {},
  div: {
    display: 'flex',
    justifyContent: 'center',
  },
  block: {
    width: 500,
  },
  profile: {
    padding: 10,
    paddingTop: 20,
    paddingBottom: 30,
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  group: {
    display: 'flex',
    justifyContent: 'center',
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
        <div className={classes.div}>
          <div className={classes.block}>
            <div className={classes.profile}>
              <ProfileAvatar user={user} onChangeAvatar={this.handleUpload} visible={auth.user.id === user.id} />
              <UserInfo user={user} />
              <ProfileEdit visible={auth.user.id === user.id} />
            </div>
            <Link to="/group/create">
              <Button className={classes.button} color="primary">Собери свое мероприятие или компанию друзей</Button>
            </Link>
          </div>
        </div>
        <div className={classes.group}>
          <Groups currentUser={auth.user.id === user.id} admin_id={user.id} />
        </div>
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
