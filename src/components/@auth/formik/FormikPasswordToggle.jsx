import React, { Component } from 'react'
import { object, number, string, shape, func } from 'prop-types'
import { IconButton, InputAdornment, TextField } from '@material-ui/core'
import VisibilityOff from 'mdi-react/VisibilityOffIcon'
import Visibility from 'mdi-react/VisibilityIcon'

class FormikPasswordToggle extends Component {
  state = {
    showPassword: false,
  }

  handleMouseDownPassword = event => {
    event.preventDefault()
  }
  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword })
  }

  render() {
    const { field, form, ...props } = this.props
    return <TextField
      {...props}
      {...field}
      InputLabelProps={{ shrink: true }}
      fullWidth
      margin="dense"
      error={(form.submitCount > 0) && !!form.errors[field.name]}
      helperText={(form.submitCount > 0) && form.errors[field.name]}
      type={this.state.showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="Toggle password visibility"
              onClick={this.handleClickShowPassword}
              onMouseDown={this.handleMouseDownPassword}
            >
              {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  }
}

FormikPasswordToggle.propTypes = {
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

export default FormikPasswordToggle
