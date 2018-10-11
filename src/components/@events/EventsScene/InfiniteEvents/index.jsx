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
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    display: 'grid',
    paddingTop: 15,
    maxWidth: 1300,
    margin: '0 auto',
    gridGap: '30px',
    gridTemplateColumns: '370px',

    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '370px 370px',
    },

    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: '370px 370px 370px',
    },
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

    return <div className={classes.root}>
      <InfiniteScroll
        initialLoad
        pageStart={0}
        loadMore={this.load}
        hasMore={this.hasMore()}
        loader={<Loading />}
        className={classes.container}
      >
        {Object.values(events).map(event => <EventCard key={event.id} canSelect={canSelect} event={event} />)}
      </InfiniteScroll>
    </div>
  }
}

InfiniteEvents.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  events: object.isRequired,
  canSelect: bool.isRequired,
}

export default withStyles(styles)(connector(InfiniteEvents))
