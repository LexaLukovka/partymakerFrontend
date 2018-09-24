/* eslint-disable react/jsx-closing-tag-location,padded-blocks */
import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import connector from './connector'
import EventCard from './EventCard'
import Loading from 'components/Loading'
import isEmpty from 'lodash/isEmpty'
import NotFound from 'components/NotFound'

const styles = {
  root: {},
}

class EvenetsScene extends Component {

  componentDidMount() {
    this.load(1)
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
    const { events: { loading, events }, classes } = this.props
    if (loading) return <Loading />
    if (isEmpty(events)) return <NotFound />

    return <div className={classes.root}>
      <InfiniteScroll
        initialLoad
        pageStart={0}
        loadMore={this.load}
        hasMore={this.hasMore()}
        loader={<Loading />}
      >
        {events.map(event => <EventCard key={event.id} event={event} />)}
      </InfiniteScroll>
    </div>
  }
}

EvenetsScene.propTypes = {
  classes: object.isRequired,
  events: object.isRequired,
  actions: object.isRequired,

}

export default withStyles(styles)(connector(EvenetsScene))
