import React from 'react'
import { object } from 'prop-types'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core'

import PlaceForm from './place/PlaceForm'
import Form from './From'

import isEmpty from 'lodash/isEmpty'
import qs from 'querystring'

import formik from './formik/formik'
import connector from './connector'

const styles = theme => ({
  root: {
    padding: '0 15px',
    margin: '0 auto',
    maxWidth: 700,
    marginTop: theme.spacing.size4,
    '@media only screen and (max-width: 320px)': {
      marginTop: 0,
    },
  },
})

class CreateScene extends React.Component {
  componentDidMount() {
    const { actions, location: { search } } = this.props
    const id = qs.parse(search.replace('?', ''))

    if (id.place_id !== undefined) {
      actions.group.resetEvent()
      actions.place.show(id.place_id)
    }
    if (id.event_id !== undefined) {
      actions.group.resetPlace()
      actions.event.find(id.event_id)
    }

    actions.header.setTitle('Создание')
    actions.header.back()
    document.title = 'Создание компании'
  }

  componentWillReceiveProps(nextProps) {
    const { actions, place, event, location: { search } } = this.props
    const id = qs.parse(search.replace('?', ''))

    if (place !== nextProps.place) {
      if (!isEmpty(nextProps.place) && id.place_id) {
        actions.group.update({ place: nextProps.place, address: nextProps.place.address })
      }
    }
    if (event !== nextProps.event) {
      if (!isEmpty(nextProps.event) && id.event_id) {
        actions.group.update({ event: nextProps.event, address: nextProps.event.address })
      }
    }
  }

  componentWillUnmount() {
    const { actions } = this.props
    this.props.actions.header.resetTitle()
    actions.header.menu()
  }

  render() {
    const { classes, ...formHOC } = this.props
    return (
      <form className={classes.root}>
        <PlaceForm {...formHOC} />
        <Form {...formHOC} />

      </form>
    )
  }
}

CreateScene.propTypes = {
  history: object.isRequired,
  place: object.isRequired,
  event: object.isRequired,
  actions: object.isRequired,
  classes: object.isRequired,
  location: object.isRequired,
}

const router = withRouter(CreateScene)
const style = withStyles(styles)(router)
const redux = connector(style)

export default formik(redux)
