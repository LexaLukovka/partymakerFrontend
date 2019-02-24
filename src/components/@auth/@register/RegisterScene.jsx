import React from 'react'
import RegisterForm from './RegisterForm'
import CardAuth from 'src/components/@auth/CardAuth'

const RegisterScene = () =>
  <CardAuth
    title="РЕГИСТРАЦИЯ"
    images="register.jpg"
    documentTitle="Регистрация - Partymaker"
  >
    <RegisterForm />
  </CardAuth>

export default RegisterScene
