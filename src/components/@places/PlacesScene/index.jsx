import React, { Component } from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Loading from 'components/Loading'
import isEmpty from 'lodash/isEmpty'
import NotFound from 'components/NotFound'
import PlacesList from './PlacesList'
import connector from '../connector'


const styles = theme => ({
  root: {},
})

class PlacesScene extends Component {
  componentWillMount() {
    const { actions, places } = this.props
    if (!places.places) actions.places.load()
  }

  render() {
    const { places, classes } = this.props
    if (places.loading) return <Loading />
    if (isEmpty(places.places)) return <NotFound />

    return (
      <div className={classes.root}>
        <PlacesList places={places.places} />
      </div>
    )
  }
}

PlacesScene.propTypes = {
  places: object.isRequired,
  actions: object.isRequired,
  classes: object.isRequired,
}

export default withStyles(styles)(connector(PlacesScene))
