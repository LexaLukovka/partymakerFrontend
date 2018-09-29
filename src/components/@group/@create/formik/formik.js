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
  const { actions, group, history, place, event } = props

  const place_id = isEmpty(group.form.place) ? null : group.form.place.id
  const event_id = isEmpty(group.form.event) ? null : group.form.event.id

  let values = formValues

  if (!isEmpty(place) && !isEmpty(event)) {
    values = { address: place.address.address, ...values }
  }

  if (values.address === '') {
    methods.setError('address', 'Пожалуйста укажите адрес')
  }

  const create = {
    title: values.title,
    place_id,
    event_id,
    address: place_id || event_id ? null : {
      address: values.address.formatted_address,
      lng: values.address.geometry.location.lng(),
      lat: values.address.geometry.location.lat(),
      placeId: values.address.place_id,
    },
    description: values.description,
    date: values.date,
    private_party: group.form.private,
    invite_url: group.form.invite_url,
  }

  actions.group.update(create)

  actions.group.create(create)

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
