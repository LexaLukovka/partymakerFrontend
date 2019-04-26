/* eslint-disable react/no-unused-prop-types */
import React from 'react'
import { Form, Field } from 'formik'
import { object, string, func } from 'prop-types'
import { withStyles } from '@material-ui/core'
import TextField from 'components/formik/FormikTextField'
import AddressField from 'components/formik/FormikAddressField'
import formik from './formik'

const styles = {
  root: {},

  headline: {
    display: 'flex',
  },
  headlineField: {
    flexGrow: 1,
  },
  preposition: {
    width: 35,
  }
}

const InviteForm = ({ classes }) =>
  <Form className={classes.root}>
    <div className={classes.headline}>
      <Field
        name="headline"
        className={classes.headlineField}
        margin="normal"
        component={TextField}
      />
      <Field
        name="preposition"
        className={classes.preposition}
        margin="normal"
        component={TextField}
      />
    </div>
    <Field
      name="title"
      margin="normal"
      component={TextField}
    />
    <Field
      name="address"
      margin="normal"
      component={AddressField}
    />
    <Field
      name="datetime"
      margin="normal"
      component={TextField}
    />
  </Form>

InviteForm.propTypes = {
  classes: object.isRequired,
  title: string,
  address: string,
  datetime: string,
  onSubmit: func.isRequired,
}

export default withStyles(styles)(formik(InviteForm))
