/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import connector from '../connector'

const initValues = (form) => ({
  district: form ? form.address.district : '',
})

const rules = Yup.object()
  .shape({
    district: Yup.string()
      .required('Это поле является обязательным'),
  })

const handleSubmit = ({ actions, match }) => async ({ district }, methods) => {
  await actions.parties.change(match.params.id, { district })
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
