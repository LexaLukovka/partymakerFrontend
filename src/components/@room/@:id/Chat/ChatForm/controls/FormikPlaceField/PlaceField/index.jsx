import React, { Component, memo } from 'react'
import { withStyles, Button } from '@material-ui/core'
import { shape, func, string } from 'prop-types'
import PlaceDrawer from 'components/modules/PlaceDrawer'
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
    const { name, actions, onChange } = this.props

    const { value: place } = await actions.place.create(form)

    onChange(name, place)
    this.close()
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
  className: string,
  actions: shape({
    place: shape({
      create: func.isRequired,
    })
  }),
  name: string.isRequired,
  onChange: func.isRequired
}

const isEqual = (prev, next) => {
  return prev.name !== next.name
}

export default withStyles(styles)(connector(memo(PlaceField, isEqual)))
