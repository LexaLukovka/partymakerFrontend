/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import connector from '../connector'

const initValues = (form) => ({
  description: form ? form.description : '',
})

const rules = Yup.object()
  .shape({
    description: Yup.string()
      .required('Это поле является обязательным'),
  })

const handleSubmit = ({ actions, match }) => async ({ description }, methods) => {
  await actions.party.change(match.params.id, { description })
  await actions.party.show(match.params.id)
  await actions.parties.load()

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
