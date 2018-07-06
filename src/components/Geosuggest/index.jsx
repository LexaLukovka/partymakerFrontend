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
    if (typeof window.google !== 'undefined' && typeof window.google.maps !== 'undefined') {
      const inputElement = document.getElementsByName(this.props.name)[0]
      this.apiObj = new window.google.maps.places.Autocomplete(inputElement, this.props.options)
      this.apiObj.addListener('place_changed', () => {
        this.props.onChange(this.props.name, this.apiObj.getPlace())
        this.setState({
          value: this.apiObj.getPlace().formatted_address,
        })
      })
    } else {
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
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.apiObj)
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  handleBlur = () => {
    this.props.onBlur(this.props.name, true)
  }

  render() {
    const {
      ...props
    } = this.props

    return (
      <TextField
        {...props}
        value={this.state.value}
        helperText={props.helperText && props.helperText.formatted_address}
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
  options: PropTypes.shape({}),
}

Geosuggest.defaultProps = {
  name: 'geosuggest',
  value: '',
  onChange: () => {},
  onBlur: () => {},
  options: {},
}

export default Geosuggest
