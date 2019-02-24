import React from 'react'
import LoginForm from './LoginForm'
import CardAuth from 'src/components/@auth/CardAuth'

const LoginScene = () =>
  <CardAuth
    title="ВОЙТИ"
    images="login.jpg"
    documentTitle="Вход в аккаунт - Partymaker"
  >
    <LoginForm />
  </CardAuth>

export default LoginScene
