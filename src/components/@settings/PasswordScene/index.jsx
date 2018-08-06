import React from 'react'
import { object } from 'prop-types'
import { withStyles, Button } from '@material-ui/core'
import PasswordForm from './PasswordForm'

const styles = {
  root: {
    paddingTop: 23,
  },
}

const PasswordScene = ({ classes }) =>
  <div className={classes.root}>
    <PasswordForm />
    <Button variant="raised" color="primary"> Сохранить </Button>
  </div>

PasswordScene.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(PasswordScene)
