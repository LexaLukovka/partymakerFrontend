/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import connector from '../connector'
import moment from 'moment'

const initValues = (form) => ({
  date: form.date || moment(new Date()).format('YYYY-MM-DDT20:00'),
})

const rules = Yup.object()
  .shape({
    date: Yup.string()
      .required('Это поле является обязательным'),
  })

const handleSubmit = ({ actions, match }) => async ({ date }, methods) => {
  await actions.group.change(match.params.id, { date })
  await actions.group.show(match.params.id)
  await actions.groups.load()

  methods.setSubmitting(false)
}

const FormikHOC = Form => connector(props =>
  <Formik
    initialValues={initValues(props.group)}
    validationSchema={rules}
    enableReinitialize
    onSubmit={handleSubmit(props)}
    component={Form}
  />)

export default FormikHOC
