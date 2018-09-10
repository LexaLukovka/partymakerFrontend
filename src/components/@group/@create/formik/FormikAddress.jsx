/* eslint-disable react/jsx-boolean-value */
import React from 'react'
import { func, number, object, shape, string } from 'prop-types'
import Geosuggest from 'components/Geosuggest'

const FormikAddress = ({ field, form, ...props }) =>
  <Geosuggest
    {...props}
    {...field}
    formik={true}
    fullWidth
    margin="dense"
    error={(form.submitCount > 0) && !!form.errors[field.name]}
    helperText={(form.submitCount > 0) && form.errors[field.name]}
  />

FormikAddress.propTypes = {
  field: shape({
    name: string,
    value: string,
    onChange: func,
    onBlur: func,
  }).isRequired,
  form: shape({
    errors: object,
    submitCount: number,
  }).isRequired,
}

export default FormikAddress
