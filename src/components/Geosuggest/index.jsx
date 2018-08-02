/* eslint-disable no-console */
import TextField from '@material-ui/core/es/TextField/TextField'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Geosuggest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value.formatted_address,
    }
  }

  componentDidMount() {
    if (this.isGoogleAvailable()) {
      this.apiObj = this.initAutocomplete()

      this.apiObj.addListener('place_changed', this.handleChange)
    } else {
      this.setDummyAddress()
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.apiObj)
  }

  setDummyAddress = () => {
    console.warn('Google API object is not defined')
    this.props.onChange(this.props.name, {
      formatted_address: this.state.value,
      geometry: {
        location: {
          lat: () => 0,
          lng: () => 0,
        },
      },
    })
  }

  initAutocomplete = () => {
    const inputElement = document.getElementsByName(this.props.name)[0]
    return new window.google.maps.places.Autocomplete(inputElement, this.props.options)
  }

  isGoogleAvailable = () => typeof window.google !== 'undefined' && typeof window.google.maps !== 'undefined'

  handleChange = event => {
    const { textValue } = this.state
    this.props.onChange(this.props.name, { ...this.apiObj.getPlace(), textValue })
  }

  handleBlur = () => {
    this.props.onBlur(this.props.name, true)
  }

  render() {
    const {
      helperText,
      value,
      ...props
    } = this.props

    return (
      <TextField
        {...props}
        helperText={helperText || ''}
        defaultValue={value.formatted_address}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
      />
    )
  }
}

Geosuggest.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onBlur: PropTypes.func,
  helperText: PropTypes.node,
  options: PropTypes.shape({}),
}

Geosuggest.defaultProps = {
  name: 'geosuggest',
  helperText: null,
  value: '',
  onChange: () => {},
  onBlur: () => {},
  options: {},
}

export default Geosuggest
