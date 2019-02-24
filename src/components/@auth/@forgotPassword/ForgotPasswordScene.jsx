import React from 'react'
import ForgotForm from './ForgotForm'
import CardAuth from 'src/components/@auth/CardAuth'

const ForgotPasswordScene = () =>
  <CardAuth
    images="forgot.jpg"
    title="Восстановление пароля"
    documentTitle="Восстановление пароля - Partymaker"
  >
    <ForgotForm />
  </CardAuth>

export default ForgotPasswordScene
