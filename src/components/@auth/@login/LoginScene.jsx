import React, { Component } from 'react'
import AuthCard from 'src/components/@auth/Card/AuthCard'
import LoginForm from './LoginForm'
import { func, shape } from 'prop-types'

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
        <LoginForm />
      </AuthCard>
    )
  }
}

LoginScene.propTypes = {
  actions: shape({
    register: func.isRequired,
  }),
  history: shape({
    push: func.isRequired
  })
}

export default LoginScene
