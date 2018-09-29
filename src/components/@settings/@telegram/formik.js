/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import connector from '../connector'

const initValues = (form) => ({
  telegram: form.telegram || '',
})

const rules = Yup.object()
  .shape({
    telegram: Yup.string(),
  })

const handleSubmit = ({ actions, user }) => (formValues, methods) => {
  actions.settings.change(user.id, formValues)

  methods.setSubmitting(false)
}

const FormikHOC = Form => connector(props =>
  <Formik
    initialValues={initValues(props.user)}
    validationSchema={rules}
    enableReinitialize
    onSubmit={handleSubmit(props)}
    component={Form}
  />)

export default FormikHOC
