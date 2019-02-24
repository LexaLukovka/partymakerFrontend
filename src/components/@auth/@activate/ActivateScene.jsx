import React from 'react'
import { bool, object } from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import Loading from 'components/Loading'
import connector from './connector'
import CardAuth from 'src/components/@auth/CardAuth'

class ActivateScene extends React.Component {
  componentDidMount() {
    const { actions, match } = this.props
    actions.activate(match.params.hash)
  }

  render() {
    const { loading, user, history } = this.props

    if (loading) return <Loading />

    if (user.active) history.push('/')

    return (
      <CardAuth
        documentTitle="Активация - Partymaker"
        images="register.jpg"
        title={user.active
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
