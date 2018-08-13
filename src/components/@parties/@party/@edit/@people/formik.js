/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import connector from '../connector'

const initValues = (form) => ({
  people_min: form.people_min || '',
  people_max: form.people_max || '',
})

const rules = Yup.object()
  .shape({
    people_min: Yup.string()
      .required('Это поле является обязательным'),
    people_max: Yup.string()
      .required('Это поле является обязательным'),
  })

const handleSubmit = ({ actions, match }) => ({ people_min, people_max }, methods) => {
  actions.parties.change(match.params.id, {
    people_min,
    people_max,
  })

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
