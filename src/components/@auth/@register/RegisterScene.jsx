import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import RegisterForm from './RegisterForm'
import Card from '@material-ui/core/Card/Card'

const styles = theme => ({
  root: {
    padding: 5,
  },
})

const RegisterScene = ({ classes }) =>
  <Card className={classes.root}>
    <RegisterForm />
  </Card>

RegisterScene.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(RegisterScene)
