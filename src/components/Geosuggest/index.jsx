/* eslint-disable no-console */
import TextField from '@material-ui/core/es/TextField/TextField'
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

  handleChange = event => {
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
      name,
      error,
      placeholder,
    } = this.props

    const helper = helperText || ''

    return (
      <TextField
        name={name}
        error={error}
        fullWidth={fullWidth}
        helperText={helper}
        placeholder={placeholder}
        defaultValue={value.formatted_address || ''}
        onBlur={this.handleBlur}
      />
    )
  }
}

Geosuggest.propTypes = {
  fullWidth: PropTypes.bool,
  error: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onBlur: PropTypes.func,
  helperText: PropTypes.any,
  options: PropTypes.shape({}),
}

Geosuggest.defaultProps = {
  fullWidth: false,
  error: false,
  name: 'geosuggest',
  placeholder: '',
  helperText: '',
  value: '',
  onChange: () => {},
  onBlur: () => {},
  options: {},
}

export default Geosuggest
