import React from 'react'
import { bool, object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import isEmpty from 'lodash/isEmpty'
import EventCard from './EventCard'

import connector from './connector'
import Loading from 'components/Loading'
import NotFound from 'components/NotFound'

const styles = theme => ({
  root: {
    overflowX: 'hidden',
    position: 'relative',
    height: '100%',
    background: theme.palette.common.white,
  },
})

class EventScene extends React.Component {
  componentDidMount() {
    const { actions, match, event } = this.props
    actions.header.back()

    if (isEmpty(event) || event.id !== match.params.id) {
      actions.event.find(match.params.id)
    }
  }

  componentDidUpdate() {
    const { event } = this.props
    if (!isEmpty(event)) document.title = event.title
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.menu()
  }

  render() {
    const { classes, loading, event } = this.props
    if (loading) return <Loading />
    if (isEmpty(event)) return <NotFound />

    return (
      <div className={classes.root}>
        <EventCard event={event} />
      </div>
    )
  }
}

EventScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  match: object.isRequired,
  loading: bool.isRequired,
  event: object.isRequired,
}

export default withStyles(styles)(connector(EventScene))
