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

class UserScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.header.title('Мой профиль')
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.resetTitle()
  }

  render() {
    const { user, loading } = this.props
    if (loading) return <Loading />
    if (isEmpty(user)) return <NotFound />

    return <UserForm loading={loading} user={user} />
  }
}

UserScene.propTypes = {
  user: object.isRequired,
  loading: bool.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(UserScene))
