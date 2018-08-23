import React, { Component } from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Loading from 'components/Loading'
import isEmpty from 'lodash/isEmpty'
import NotFound from 'components/NotFound'
import PlacesList from './PlacesList'
import connector from '../connector'

const styles = () => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: 10,
    maxWidth: 1300,
    margin: '0 auto',
  },
})

class PlacesScene extends Component {
  componentWillMount() {
    const { actions, places } = this.props
    if (!places.places) actions.places.load()
    document.title = 'Места где погулять в Запорожье'
  }

  render() {
    const { places: { loading, places }, classes } = this.props
    if (loading) return <Loading />
    if (isEmpty(places)) return <NotFound />

    return (
      <div className={classes.root}>
        <PlacesList places={places} />
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
