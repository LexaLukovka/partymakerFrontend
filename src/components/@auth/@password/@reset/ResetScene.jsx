import React, { Component } from 'react'
import { shape, string, func } from 'prop-types'
import AuthCard from 'src/components/@auth/Card/AuthCard'
import ResetForm from './ResetForm'
import connector from './connector'

class ResetScene extends Component {

  resetPassword = async ({ password }) => {
    const { match, actions } = this.props

    await actions.setPassword({
      hash: match.params.hash,
      password
    })
  }

  render() {
    return (
      <AuthCard
        images="forgot.jpg"
        title="Восстановление пароля"
        documentTitle="Восстановление пароля - Partymaker"
      >
        <ResetForm onSubmit={this.resetPassword} />
      </AuthCard>
    )
  }
}

ResetScene.propTypes = {
  match: shape({
    params: shape({
      hash: string.isRequired,
    })
  }).isRequired,
  actions: shape({
    setPassword: func.isRequired,
  })
}

export default connector(ResetScene)
