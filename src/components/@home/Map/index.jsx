import React from 'react'
import { withStyles } from '@material-ui/core'
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps'

const styles = {
  root: {},
}

const Map = () =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker position={{ lat: -34.397, lng: 150.644 }} />
  </GoogleMap>

export default withStyles(styles)(withGoogleMap(Map))
