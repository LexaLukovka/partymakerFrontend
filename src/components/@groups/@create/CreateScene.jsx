import React from 'react'
import { object } from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Card, Typography, withStyles } from '@material-ui/core'

import PlaceForm from './place/PlaceForm'
import Form from './From'
import Search from 'components/Search'
import Sort from 'components/Sort'
import InfiniteEvents from '../../@events/EventsScene/InfiniteEvents'
import InfinitePlaces from '../../@places/PlacesScene/InfinitePlaces'

import isEmpty from 'lodash/isEmpty'
import qs from 'querystring'

import formik from './formik/formik'
import connector from './connector'

const styles = theme => ({
  root: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  card: {
    padding: '20px 30px',
    margin: '20px auto',
    height: '100%',
    width: 370,
    [theme.breakpoints.up('md')]: {
      margin: '20px 30px',
    },
  },
  search: {
    padding: 30,
    paddingBottom: 0,
  },
  typography: {
    paddingTop: 20,
  },
  place_event: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
})

class CreateScene extends React.Component {
  componentDidMount() {
    const { actions, event, place, location: { search } } = this.props
    const id = qs.parse(search.replace('?', ''))

    if (id.place_id !== undefined) {
      actions.group.resetEvent()
      if (isEmpty(place)) {
        actions.place.load(id.place_id).then(() => {
          actions.place.open(id.place_id)
        })
      } else {
        actions.place.open(id.place_id)
      }
    }
    if (id.event_id !== undefined) {
      actions.group.resetPlace()
      if (isEmpty(event)) {
        actions.event.load(id.event_id).then(() => {
          actions.event.open(id.event_id)
        })
      } else {
        actions.event.open(id.event_id)
      }
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
      <div className={classes.root}>
        <Card className={classes.card}>
          <form>
            <PlaceForm {...formHOC} />
            <Form {...formHOC} />
          </form>
        </Card>
        <div className={classes.place_event}>
          <div className={classes.search}>
            <Search />
            <Sort />
          </div>
          <Typography variant="subheading" className={classes.typography}>Хорошие места чтобы пойти...</Typography>
          <InfiniteEvents />
          <Typography variant="subheading" className={classes.typography}>Ближайшие события</Typography>
          <InfinitePlaces />
        </div>
      </div>
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
