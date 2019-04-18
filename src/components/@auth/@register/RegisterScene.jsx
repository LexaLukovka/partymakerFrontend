import React, { Component } from 'react'
import { shape, func } from 'prop-types'
import AuthCard from 'components/@auth/AuthCard'
import RegisterForm from './RegisterForm'
import connector from './connector'
import { Helmet } from 'react-helmet'

class RegisterScene extends Component {

  register = async credentials => {
    const { history, actions } = this.props

    await actions.register(credentials)
    history.push('/home')
  }

  render() {
    return (
      <AuthCard title="РЕГИСТРАЦИЯ">
        <Helmet>
          <title>Регистрация - Partymaker</title>
        </Helmet>
        <RegisterForm onSubmit={this.register} />
      </AuthCard>
    )
  }
}

RegisterScene.propTypes = {
  actions: shape({
    register: func.isRequired,
  }),
  history: shape({
    push: func.isRequired
  })
}

export default connector(RegisterScene)
