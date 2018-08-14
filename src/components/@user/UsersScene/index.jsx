import React from 'react'
import { object, bool } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import UserForm from '../UserForm'
import Loading from 'components/Loading'
import isEmpty from 'lodash/isEmpty'
import NotFound from 'components/NotFound'
import connector from './connector'

const styles = () => ({
  root: {},
})

class UsersScene extends React.Component {
  componentDidMount() {
    const { actions, match } = this.props
    actions.user.find(match.params.id)
    actions.header.back()
    actions.header.title('Профиль')
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.menu()
    actions.header.resetTitle()
  }

  render() {
    const { user, loading, match } = this.props
    if (loading) return <Loading />
    if (isEmpty(user)) return <NotFound />

    return <UserForm loading={loading} user={user && user.user} id={match.params.id} />
  }
}

UsersScene.propTypes = {
  loading: bool.isRequired,
  user: object,
  actions: object.isRequired,
  match: object.isRequired,
}

UsersScene.defaultProps = {
  user: {},
}

export default withStyles(styles)(connector(UsersScene))
