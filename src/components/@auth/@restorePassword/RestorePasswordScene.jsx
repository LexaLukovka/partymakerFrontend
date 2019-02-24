import React from 'react'
import { object } from 'prop-types'
import AuthCard from 'src/components/@auth/Card/AuthCard'
import RestoreForm from './RestoreForm'

const RestorePasswordScene = ({ match }) =>
  <AuthCard
    images="forgot.jpg"
    title="Восстановление пароля"
    documentTitle="Восстановление пароля - Partymaker"
  >
    <RestoreForm hash={match.params.hash} />
  </AuthCard>

RestorePasswordScene.propTypes = {
  match: object.isRequired,
}

export default RestorePasswordScene
