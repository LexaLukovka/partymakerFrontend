/* eslint-disable react/jsx-boolean-value */
import React from 'react'
import { bool, func, number, object, shape, string } from 'prop-types'
import Geosuggest from 'components/Geosuggest'

const FormikAddress = ({ field, form, disabled, ...props }) =>
  <Geosuggest
    {...props}
    {...field}
    formik={true}
    fullWidth
    margin="dense"
    disabled={disabled}
    error={(form.submitCount > 0) && !!form.errors[field.name]}
    helperText={(form.submitCount > 0) && form.errors[field.name]}
  />

FormikAddress.propTypes = {
  disabled: bool,
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

FormikAddress.defaultProps = {
  disabled: false,
}

export default FormikAddress
