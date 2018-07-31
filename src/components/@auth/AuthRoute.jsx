import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'
import connector from './connector'

const AuthRoute = ({ auth, ...rest }) => {
  if (auth.token) {
    return <Route {...rest} />
  }

  return <Redirect to="/login" />
}

AuthRoute.propTypes = {
  auth: PropTypes.object.isRequired,
}

export default connector(AuthRoute)
