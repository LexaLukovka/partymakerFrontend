import React from 'react'
import AuthCard from 'src/components/@auth/Card/AuthCard'
import RegisterForm from './RegisterForm'

const RegisterScene = () =>
  <AuthCard
    title="РЕГИСТРАЦИЯ"
    images="register.jpg"
    documentTitle="Регистрация - Partymaker"
  >
    <RegisterForm />
  </AuthCard>

export default RegisterScene
