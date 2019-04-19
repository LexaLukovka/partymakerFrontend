import React, { Component } from 'react'
import AuthCard from 'src/components/@auth/AuthCard'
import { Helmet } from 'react-helmet'
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
      <AuthCard title="ВОЙТИ">
        <Helmet>
          <title>
            Вход в аккаунт - Partymaker
          </title>
        </Helmet>
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
