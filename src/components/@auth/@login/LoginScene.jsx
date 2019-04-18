import React, { Component } from 'react'
import AuthCard from 'src/components/@auth/AuthCard'
import LoginForm from './LoginForm'
import { func, shape } from 'prop-types'
import connector from './connector'

class LoginScene extends Component {

  login = async (credentials) => {
    const { actions, history } = this.props

    await actions.login(credentials)

    history.push('/home')
  }

  render() {
    return (
      <AuthCard
        title="ВОЙТИ"
        images="login.jpg"
        documentTitle="Вход в аккаунт - Partymaker"
      >
        <LoginForm onSubmit={this.login} />
      </AuthCard>
    )
  }
}

LoginScene.propTypes = {
  actions: shape({
    login: func.isRequired,
  }),
  history: shape({
    push: func.isRequired
  })
}

export default connector(LoginScene)
