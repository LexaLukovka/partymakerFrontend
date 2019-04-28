import React, { Component } from 'react'
import { object, func } from 'prop-types'
import { withStyles } from '@material-ui/core'
import placeShape from 'shapes/place'
import SetPlaceIcon from './SetPlaceIcon'
import Loading from 'components/elements/Loading'
import PlaceDrawer from './PlaceDrawer'
import PlaceForm from './PlaceForm'

const styles = {
  root: {},
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
    const { onLoad } = this.props

    this.setState({ isLoading: true })
    const result = await onLoad()
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
    const { place, onUpdate, onCreate } = this.props

    if (!place) return onCreate(form)

    return onUpdate(form)
  }

  render() {
    const { classes, place } = this.props
    const { isDrawerOpen, isLoading } = this.state

    if (isLoading) return <Loading />

    return (
      <div className={classes.root}>
        <SetPlaceIcon onClick={this.open} />
        <PlaceDrawer isOpen={isDrawerOpen} onClose={this.close}>
          <PlaceForm place={place} onCancel={this.close} onSubmit={this.handleSubmit} />
        </PlaceDrawer>
      </div>
    )
  }
}

Place.propTypes = {
  classes: object.isRequired,
  place: placeShape,
  onLoad: func.isRequired,
  onCreate: func.isRequired,
  onUpdate: func.isRequired,
}

export default withStyles(styles)(Place)
