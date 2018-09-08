import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'
import connector from './connector'

const SignedInRoute = ({ auth, ...rest }) => {
  if (auth.user) {
    return <Route {...rest} />
  }

  return <Redirect to="/auth/login" />
}

SignedInRoute.propTypes = {
  auth: PropTypes.object.isRequired,
}

export default connector(SignedInRoute)
