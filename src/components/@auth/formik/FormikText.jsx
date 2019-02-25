import React from 'react'
import { func, number, object, shape, string } from 'prop-types'
import { TextField } from '@material-ui/core'

const FormikText = ({ field, form, ...props }) =>
  <TextField
    {...props}
    {...field}
    InputLabelProps={{ shrink: true }}
    fullWidth
    margin="dense"
    style={{ marginBottom: 10 }}
  />

FormikText.propTypes = {
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

export default FormikText
