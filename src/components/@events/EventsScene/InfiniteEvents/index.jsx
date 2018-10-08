import React from 'react'
import { bool, object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import InfiniteScroll from 'react-infinite-scroller'

import EventCard from '../EventCard'
import Loading from 'components/Loading'
import NotFound from 'components/NotFound'

import isEmpty from 'lodash/isEmpty'
import connector from '../connector'

const styles = theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr',
    },
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: '1fr 1fr',
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
    paddingTop: 15,
    maxWidth: 1300,
    margin: '0 auto',
  },
})

class InfiniteEvents extends React.Component {
  componentDidMount() {
    const { events } = this.props
    if (!events.allLoaded) this.load(1)

    document.title = 'События Запорожья'
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.events.canSelect(false)
  }

  load = (page) => {
    const { actions } = this.props
    actions.events.load({ page })
  }

  hasMore = () => {
    const { events: { total, limit, page } } = this.props
    const items = page * limit
    return total >= items
  }

  render() {
    const { classes, events: { loading, events }, canSelect } = this.props
    if (loading) return <Loading />
    if (isEmpty(events)) return <NotFound />

    return <InfiniteScroll
      initialLoad
      pageStart={0}
      loadMore={this.load}
      hasMore={this.hasMore()}
      loader={<Loading />}
      className={classes.root}
    >
      {Object.values(events).map(event => <EventCard key={event.id} canSelect={canSelect} event={event} />)}
    </InfiniteScroll>
  }
}

InfiniteEvents.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  events: object.isRequired,
  canSelect: bool.isRequired,
}

export default withStyles(styles)(connector(InfiniteEvents))
