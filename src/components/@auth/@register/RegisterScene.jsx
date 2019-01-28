import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Helmet } from 'react-helmet'

const styles = {
  root: {},
}

const RegisterScene = ({ classes }) =>
  <div className={classes.root}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Регистрация - Partymaker</title>
    </Helmet>
    Register
  </div>

RegisterScene.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(RegisterScene)
