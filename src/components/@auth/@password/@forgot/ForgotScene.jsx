import React from 'react'
import AuthCard from 'src/components/@auth/Card/AuthCard'
import ForgotForm from './ForgotForm'

const ForgotScene = () =>
  <AuthCard
    images="forgot.jpg"
    title="Восстановление пароля"
    documentTitle="Восстановление пароля - Partymaker"
  >
    <ForgotForm />
  </AuthCard>

export default ForgotScene
