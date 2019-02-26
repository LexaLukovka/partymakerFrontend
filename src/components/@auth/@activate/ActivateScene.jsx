import React from 'react'
import { bool, object } from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import AuthCard from 'src/components/@auth/Card/AuthCard'
import Loading from 'components/Loading'
import connector from './connector'

class ActivateScene extends React.Component {
  componentDidMount() {
    const { actions, match } = this.props
    actions.activate(match.params.hash)
  }

  render() {
    const { loading, user, history } = this.props

    if (loading) return <Loading />

    if (user && user.active) history.push('/')

    return (
      <AuthCard
        documentTitle="Активация - Partymaker"
        images="register.jpg"
        title={user && user.active
          ? <Typography variant="h5" align="center">Активация прошла успешно</Typography>
          : <Typography variant="h5" align="center" color="error">Активация не успешна</Typography>}
      />
    )
  }
}

ActivateScene.propTypes = {
  actions: object.isRequired,
  history: object.isRequired,
  match: object.isRequired,
  loading: bool.isRequired,
  user: object.isRequired,
}

export default connector(withRouter(ActivateScene))
