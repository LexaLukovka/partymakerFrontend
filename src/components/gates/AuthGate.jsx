import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Auth from 'services/Auth'

const AuthGate = (props) => {
  const { ...rest } = props

  if (!Auth.user()) return <Redirect to="/auth/login" />

  return <Route {...rest} />
}

export default AuthGate
