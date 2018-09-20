/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import connector from '../connector'

const initValues = () => ({
  address: '',
})

const rules = Yup.object()
  .shape({
    address: Yup.string()
      .required('Это поле является обязательным'),
  })

const handleSubmit = ({ actions, match }) => async (formValues, methods) => {
  const address = {
    address: formValues.address.formatted_address,
    lng: formValues.address.geometry.location.lng(),
    lat: formValues.address.geometry.location.lat(),
    placeId: formValues.address.place_id,
  }

  await actions.group.change(match.params.id, { address })
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
