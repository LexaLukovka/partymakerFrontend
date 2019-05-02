import React, { Component } from 'react'
import { object, func, node } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import placeShape from 'shapes/place'
import SetPlaceIcon from './SetPlaceIcon'
import Loading from 'components/elements/Loading'
import PlaceDrawer from 'components/modules/PlaceDrawer'

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

  submit = (form) => {
    const { place, onUpdate, onCreate } = this.props

    if (!place) return onCreate(form)

    return onUpdate(place.id, form)
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
        <PlaceDrawer
          isOpen={isDrawerOpen}
          place={place}
          onClose={this.close}
          onSubmit={this.submit}
        />
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
  children: node.isRequired,
}

export default withStyles(styles)(Place)
