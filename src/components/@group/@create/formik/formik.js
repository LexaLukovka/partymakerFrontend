/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { Formik } from 'src/components/@group/@create/formik/formik'
import moment from 'moment'
import * as Yup from 'yup'
import connector from '../connector'
import isEmpty from 'lodash/isEmpty'

const initValues = (form) => ({
  title: form.title || '',
  address: form.address,
  startDay: form.startDay || moment(new Date()).format('YYYY-MM-DD'),
  startTime: form.startTime || '20:00',
  description: form.description || '',
})

const rules = Yup.object().shape({
  title: Yup.string().required('Это поле является обязательным'),
  address: Yup.string(),
  startDay: Yup.string().required('Это поле является обязательным'),
  startTime: Yup.string().required('Это поле является обязательным'),
  description: Yup.string().required('Это поле является обязательным'),
})

const handleSubmit = props => (formValues, methods) => {
  const { actions, history, place } = props
  let values = formValues

  if (!isEmpty(place)) {
    values = { district: place.address.district, address: place.address.address, ...values }
  }

  if (values.district === '') {
    methods.setError('district', 'Пожалуйста укажите район')
  }

  if (values.address === '') {
    methods.setError('address', 'Пожалуйста выберите из списка')
  }

  actions.party.update(values)
  methods.setSubmitting(false)
}

const FormikHOC = Form => connector(props =>
  <Formik
    initialValues={initValues(props.party.form)}
    validationSchema={rules}
    enableReinitialize
    onSubmit={handleSubmit(props)}
    component={Form}
  />)

export default FormikHOC
