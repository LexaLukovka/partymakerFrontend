import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import isEmpty from 'lodash/isEmpty'
import EventCard from './EventCard'

import Loading from 'components/Loading'
import NotFound from 'components/NotFound'

import connector from './connector'
import PictureGrid from 'components/PictureGrid/PictureGrid'

const styles = theme => ({
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

class EventScene extends React.Component {
  componentWillMount() {
    const { actions, match } = this.props
    this.openEvent(match.params.id)
    actions.header.back()
  }

  componentDidUpdate() {
    const { actions, event } = this.props
    if (!isEmpty(event)) {
      actions.header.setTitle(event.title)
      document.title = event.title
    }
  }

  componentWillUnmount() {
    const { actions } = this.props
    this.props.actions.header.resetTitle()
    actions.header.menu()
  }

  openModal = (picture_url) => {
    const { actions } = this.props
    actions.pictureModal.show(picture_url)
  }

  openEvent = (event_id) => {
    const { actions, event } = this.props
    if (isEmpty(event)) {
      actions.event.load(event_id).then(() => {
        actions.event.open(event_id)
      })
    } else {
      actions.event.open(event_id)
    }
  }

  render() {
    const { classes, event } = this.props
    if (isEmpty(event)) return <Loading />
    if (event.error) return <NotFound />

    return (
      <div className={classes.root}>
        <div className={classes.placeContainer}>
          <EventCard event={event} />
        </div>
        <div className={classes.pictureGridContainer}>
          <PictureGrid pictures={event.pictures} onClick={this.openModal} />
        </div>
      </div>
    )
  }
}

EventScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  match: object.isRequired,
  event: object.isRequired,
}

export default withStyles(styles)(connector(EventScene))
