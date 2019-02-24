import React from 'react'
import AuthCard from 'src/components/@auth/Card/AuthCard'
import LoginForm from './LoginForm'

const LoginScene = () =>
  <AuthCard
    title="ВОЙТИ"
    images="login.jpg"
    documentTitle="Вход в аккаунт - Partymaker"
  >
    <LoginForm />
  </AuthCard>

export default LoginScene
