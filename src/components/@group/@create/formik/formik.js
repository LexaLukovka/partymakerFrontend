/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { Formik } from 'formik'
import moment from 'moment'
import * as Yup from 'yup'
import connector from '../connector'
import isEmpty from 'lodash/isEmpty'

const initValues = (form) => ({
  title: form.title || '',
  address: form.address,
  date: form.date || moment(new Date()).format('YYYY-MM-DDT20:00'),
  description: form.description || '',
})

const rules = Yup.object().shape({
  title: Yup.string().required('Это поле является обязательным'),
  address: Yup.string(),
  date: Yup.string().required('Это поле является обязательным'),
  description: Yup.string().required('Это поле является обязательным'),
})

const handleSubmit = props => (formValues, methods) => {
  const { actions, group, history, place } = props
  let values = formValues

  if (!isEmpty(place)) {
    values = { address: place.address.address, ...values }
  }

  if (values.address === '') {
    methods.setError('address', 'Пожалуйста укажите адрес')
  }

  actions.group.update(values)

  actions.group.create(group.form)
  methods.setSubmitting(false)

  history.push('/user')
}

const FormikHOC = Form => connector(props =>
  <Formik
    initialValues={initValues(props.group.form)}
    validationSchema={rules}
    enableReinitialize
    onSubmit={handleSubmit(props)}
    component={Form}
  />)

export default FormikHOC
