/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import connector from '../../../connector'

const initValues = (form) => ({
  district: form.address.district || '',
})

const rules = Yup.object()
  .shape({
    district: Yup.string()
      .required('Это поле является обязательным'),
  })

const handleSubmit = props => (formValues, methods) => {
  props.actions.parties.changeAddress(props.match.params.id, formValues)

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
