import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import PlacesCard from './PlacesCard'

const styles = theme => ({
  root: {},
})

const PlacesList = ({ places }) =>
  places.map(place => <PlacesCard key={place.id} place={place} />)

PlacesList.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(PlacesList)
