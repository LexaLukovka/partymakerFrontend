import React, { Component } from 'react'
import { object, func, node } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import placeShape from 'shapes/place'
import matchShape from 'shapes/match'
import SetPlaceIcon from './SetPlaceIcon'
import Loading from 'components/elements/Loading'
import PlaceDrawer from './PlaceDrawer'
import PlaceForm from './PlaceForm'
import { withRouter } from 'react-router-dom'

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  titles: {
    paddingLeft: 13,
  },
  placeText: {
    cursor: 'pointer'
  }
}

class Place extends Component {

  state = {
    isLoading: false,
    isDrawerOpen: false,
  }

  componentWillMount() {
    this.load().catch(console.error)
  }

  load = async () => {
    const { match, onLoad } = this.props
    this.setState({ isLoading: true })
    const result = await onLoad(match.params.id)
    this.setState({ isLoading: false })

    return result
  }

  open = () => {
    this.setState({ isDrawerOpen: true })
    this.load().catch(console.error)
  }

  close = () => {
    this.setState({ isDrawerOpen: false })
  }

  handleSubmit = (form) => {
    const { match, place, onUpdate, onCreate } = this.props

    if (!place) return onCreate(match.params.id, form)

    return onUpdate(match.params.id, form)
  }

  render() {
    const { classes, place, children } = this.props
    const { isDrawerOpen, isLoading } = this.state

    if (isLoading) return <Loading />

    return (
      <div className={classes.root}>
        <SetPlaceIcon onClick={this.open} />
        <div className={classes.titles}>
          {children}
          <Typography
            className={classes.placeText}
            variant="subtitle1"
            color="textSecondary"
            onClick={this.open}
          >
            {place?.title || place?.address || 'Выберите место'}
          </Typography>
        </div>
        <PlaceDrawer isOpen={isDrawerOpen} onClose={this.close}>
          <PlaceForm
            place={place}
            onCancel={this.close}
            onSubmit={this.handleSubmit}
          />
        </PlaceDrawer>
      </div>
    )
  }
}

Place.propTypes = {
  classes: object.isRequired,
  match: matchShape.isRequired,
  place: placeShape,
  onLoad: func.isRequired,
  onCreate: func.isRequired,
  onUpdate: func.isRequired,
  children: node.isRequired,
}

export default withStyles(styles)(withRouter(Place))
