import React, { Component } from 'react'
import { withStyles, Button } from '@material-ui/core'
import { shape, func, string } from 'prop-types'
import matchShape from 'shapes/match'
import PlaceDrawer from 'components/modules/PlaceDrawer'
import { withRouter } from 'react-router-dom'
import connector from './connector'

const styles = {
  root: {
    position: 'relative'
  },
}

class PlaceField extends Component {

  state = {
    isDrawerOpen: false,
  }

  open = () => {
    this.setState({ isDrawerOpen: true })
  }

  close = () => {
    this.setState({ isDrawerOpen: false })
  }

  create = async (form) => {
    const { name, match, actions, onChange } = this.props

    const { value: place } = await actions.place.create(match.params.id, form)

    onChange(name, place)
  }

  render() {
    const { className } = this.props
    const { isDrawerOpen } = this.state

    return (
      <>
        <Button className={className} color="primary" onClick={this.open}>МЕСТО</Button>
        <PlaceDrawer
          isOpen={isDrawerOpen}
          onClose={this.close}
          onSubmit={this.create}
        />
      </>
    )
  }
}

PlaceField.propTypes = {
  match: matchShape.isRequired,
  className: string,
  actions: shape({
    place: shape({
      create: func.isRequired,
    })
  }),
  name: string.isRequired,
  onChange: func.isRequired
}

export default withStyles(styles)(connector(withRouter(PlaceField)))
