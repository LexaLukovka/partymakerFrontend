/* eslint-disable camelcase */
import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'

import Loading from 'components/Loading'
import NotFound from 'components/NotFound'
import PlacePanel from './PlacePanel'
import PictureGrid from 'components/PictureGrid'

import isEmpty from 'lodash/isEmpty'
import connector from './connector'

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflowX: 'hidden',
    position: 'relative',
    background: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },

  placeContainer: {
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      minWidth: 500,
      flexBasis: '25%',
    },
  },
  pictureGridContainer: {
    flexGrow: 1,
    height: '100%',
    overflowY: 'auto',
  },
})

class PlaceScene extends React.Component {
  componentWillMount() {
    const { actions, match } = this.props
    this.openPlace(match.params.id)
    actions.header.back()
  }

  componentWillUnmount() {
    const { actions } = this.props
    this.props.actions.header.resetTitle()
    actions.header.menu()
  }

  openPlace = async (place_id) => {
    const { actions, place } = this.props
    actions.places.open(place_id)
    if (!place) {
      await actions.place.load(place_id)
      actions.places.open(place_id)
    }
  }

  openModal = (picture_url) => {
    const { actions } = this.props
    actions.modal.show({ picture: picture_url })
  }

  render() {
    const { classes, place } = this.props
    if (isEmpty(place)) return <NotFound />
    if (place.loading) return <Loading />

    return (
      <div className={classes.root}>
        <div className={classes.placeContainer}>
          <PlacePanel place={place} />
        </div>
        <div className={classes.pictureGridContainer}>
          <PictureGrid pictures={place.pictures} videos={place.videos} onClick={this.openModal} />
        </div>
      </div>
    )
  }
}

PlaceScene.propTypes = {
  classes: object.isRequired,
  place: object,
  actions: object.isRequired,
  match: object.isRequired,
}

PlaceScene.defaultProps = {
  place: null,
}

export default withStyles(styles)(connector(PlaceScene))
