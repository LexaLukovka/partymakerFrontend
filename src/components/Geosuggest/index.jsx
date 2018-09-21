/* eslint-disable no-console */
import { TextField } from '@material-ui/core'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Geosuggest extends Component {
  componentDidMount() {
    if (this.isGoogleAvailable()) {
      this.apiObj = this.initAutocomplete()

      this.apiObj.addListener('place_changed', this.handleChange)
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.apiObj)
  }

  initAutocomplete = () => {
    const inputElement = document.getElementsByName(this.props.name)[0]
    return new window.google.maps.places.Autocomplete(inputElement, this.props.options)
  }

  isGoogleAvailable = () => typeof window.google !== 'undefined' && typeof window.google.maps !== 'undefined'

  handleChange = () => {
    this.props.onChange(this.props.name, this.apiObj.getPlace())
  }

  handleBlur = () => {
    this.props.onBlur(this.props.name, true)
  }

  render() {
    const {
      helperText,
      value,
      fullWidth,
      label,
      name,
      error,
      placeholder,
      disabled,
      formik,
    } = this.props

    const helper = helperText || ''

    return (
      <TextField
        name={name}
        error={error}
        fullWidth={fullWidth}
        helperText={helper}
        label={label}
        placeholder={placeholder}
        InputLabelProps={{ shrink: formik && true }}
        defaultValue={value.formatted_address || ''}
        onBlur={this.handleBlur}
        disabled={disabled}
      />
    )
  }
}

Geosuggest.propTypes = {
  fullWidth: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  formik: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onBlur: PropTypes.func,
  helperText: PropTypes.any,
  options: PropTypes.shape({}),
}

Geosuggest.defaultProps = {
  fullWidth: false,
  error: false,
  formik: false,
  disabled: false,
  name: 'geosuggest',
  label: '',
  placeholder: '',
  helperText: '',
  value: '',
  onChange: () => {},
  onBlur: () => {},
  options: {},
}

export default Geosuggest
