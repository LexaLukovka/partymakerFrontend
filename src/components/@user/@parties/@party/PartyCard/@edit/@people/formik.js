/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import connector from '../../../connector'

const initValues = (form) => ({
  people_min: form.people_min || 5,
  people_max: form.people_max || 10,
})

const rules = Yup.object()
  .shape({
    people_min: Yup.string()
      .required('Это поле является обязательным'),
    people_max: Yup.string()
      .required('Это поле является обязательным'),
  })

const handleSubmit = props => (formValues, methods) => {
  props.actions.parties.change(props.match.params.id, formValues)

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
