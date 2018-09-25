import React, { Component } from 'react'
import { array, bool, object } from 'prop-types'
import { Link } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'
import { withStyles } from '@material-ui/core/styles'
import { Avatar, List, ListItem, ListItemText } from '@material-ui/core'
import Loading from 'components/Loading'
import NotFound from 'components/NotFound'
import connector from './connector'
import initialsFromUsername from 'utils/initialsFromUsername'

const styles = () => ({
  root: {},
})

class MembersScene extends Component {
  componentDidMount() {
    const { actions, match } = this.props
    actions.members.load(match.params.id)
    this.props.actions.header.setIcon('back')
    this.props.actions.header.setTitle('Участники')
    document.title = 'Участники'
  }

  componentWillUnmount() {
    this.props.actions.header.setIcon('menu')
    this.props.actions.header.resetTitle()
  }

  render() {
    const { classes, loading, users, auth } = this.props
    if (loading) return <Loading />
    if (isEmpty(users)) return <NotFound />

    return (
      <div className={classes.root}>
        <List>
          {users.map(user =>
            <ListItem component={Link} to={`/users/${user.id}`} button key={user.id}>
              <Avatar src={user.avatar_url}>{user.avatar_url ? null : initialsFromUsername(user.name)}</Avatar>
              <ListItemText
                primary={user.name}
                secondary={(user.id === auth.id) ? 'Организатор' : 'Участник'}
              />
            </ListItem>)
          }
        </List>
      </div>
    )
  }
}

MembersScene.propTypes = {
  classes: object.isRequired,
  users: array.isRequired,
  auth: object.isRequired,
  actions: object.isRequired,
  match: object.isRequired,
  loading: bool.isRequired,
}

export default withStyles(styles)(connector(MembersScene))
