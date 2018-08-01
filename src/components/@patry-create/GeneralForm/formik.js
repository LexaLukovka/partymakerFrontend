/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { Formik } from 'formik'
import moment from 'moment'
import * as Yup from 'yup'
import connector from '../connector'

const dummyGeosuggest = {
  formatted_address: '',
  geometry: {
    location: {
      lat: 0,
      lng: 0,
    },
  },
}

const initValues = (form) => ({
  title: form.title || '',
  district: form.district || 'Шевчик',
  address: form.address || dummyGeosuggest,
  startDay: form.startDay || moment(new Date()).format('YYYY-MM-DD'),
  startTime: form.startTime || '20:00',
  peopleMin: form.peopleMin || 5,
  peopleMax: form.peopleMax || 10,
  description: form.description || '',
})

const rules = Yup.object().shape({
  title: Yup.string().required('Это поле является обязательным'),
  district: Yup.string().required('Это поле является обязательным'),
  address: Yup.object().required('Это поле является обязательным'),
  startDay: Yup.string().required('Это поле является обязательным'),
  startTime: Yup.string().required('Это поле является обязательным'),
  peopleMin: Yup.number().required('Это поле является обязательным'),
  peopleMax: Yup.number().required('Это поле является обязательным'),
  description: Yup.string().required('Это поле является обязательным'),
})

const handleSubmit = props => (formValues, methods) => {
  const { actions, history } = props
  actions.party.update(formValues)
  history.push('/party/create/step/3')

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
