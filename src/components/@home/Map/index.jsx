import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps'

const styles = {
  root: {},
}

class Map extends Component {

  state = {
    lat: 47.837637,
    lng: 35.141259
  }

  constructor(props) {
    super(props)

    navigator.geolocation.getCurrentPosition(this.showPosition)
  }

  showPosition = ({ coords }) => {
    const { latitude, longitude } = coords

    this.setState({
      lat: latitude,
      lng: longitude
    })
  }

  render() {
    const { lat, lng } = this.state

    return (
      <GoogleMap
        defaultZoom={13}
        center={{ lat, lng }}
      >
        <Marker position={{ lat, lng }} />
      </GoogleMap>
    )
  }
}

export default withStyles(styles)(withGoogleMap(Map))
