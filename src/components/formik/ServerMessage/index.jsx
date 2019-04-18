import React from 'react'
import { object, string } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import { connect, getIn } from 'formik'

const styles = {
  root: {},
}

const ServerMessage = ({ classes, formik, name, ...rest }) => {
  const error = getIn(formik.errors, name)

  return (
    <Typography {...rest}>
      {error}
    </Typography>
  )
}

ServerMessage.propTypes = {
  classes: object.isRequired,
  formik: object.isRequired,
  name: string.isRequired,
}

export default withStyles(styles)(connect(ServerMessage))
