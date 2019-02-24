import React from 'react'
import { object } from 'prop-types'
import RestoreForm from './RestoreForm'
import CardAuth from 'src/components/@auth/CardAuth'

const RestorePasswordScene = ({ match }) =>
  <CardAuth
    images="forgot.jpg"
    title="Восстановление пароля"
    documentTitle="Восстановление пароля - Partymaker"
  >
    <RestoreForm hash={match.params.hash} />
  </CardAuth>

RestorePasswordScene.propTypes = {
  match: object.isRequired,
}

export default RestorePasswordScene
