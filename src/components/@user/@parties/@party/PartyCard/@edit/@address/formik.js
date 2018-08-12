/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import connector from '../../../connector'

const initValues = (form) => ({
  address: form.address.address || '',
})

const rules = Yup.object()
  .shape({
    address: Yup.string()
      .required('Это поле является обязательным'),
  })

const handleSubmit = props => (formValues, methods) => {
  props.actions.settings.change(formValues)

  methods.setSubmitting(false)
}

const FormikHOC = Form => connector(props =>
  <Formik
    initialValues={initValues(props.party)}
    validationSchema={rules}
    enableReinitialize
    onSubmit={handleSubmit(props)}
    component={Form}
  />)

export default FormikHOC
