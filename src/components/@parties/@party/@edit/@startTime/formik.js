/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import connector from '../connector'

const initValues = (form) => ({
  start_time: form ? form.start_time : '20:00',
})

const rules = Yup.object()
  .shape({
    start_time: Yup.string()
      .required('Это поле является обязательным'),
  })

const handleSubmit = ({ actions, match }) => async ({ start_time }, methods) => {
  await actions.parties.change(match.params.id, { start_time })
  await actions.parties.show(match.params.id)

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
