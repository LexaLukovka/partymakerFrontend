import React from 'react'
import { connect } from 'formik'
import { object, bool, shape, node } from 'prop-types'
import { Button, withStyles } from '@material-ui/core'

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 15px',
    marginBottom: 20,
  },
  button: {
    minWidth: 130,
    marginRight: 40,
  }
}

const SubmitButton = ({ formik, classes, children }) =>
  <Button
    disabled={formik.isSubmitting}
    className={classes.button}
    type="submit"
    size="large"
    color="primary"
  >
    {children}
  </Button>

SubmitButton.propTypes = {
  formik: shape({
    isSubmitting: bool.isRequired
  }),
  classes: object.isRequired,
  children: node.isRequired,
}

export default withStyles(styles)(connect(SubmitButton))
