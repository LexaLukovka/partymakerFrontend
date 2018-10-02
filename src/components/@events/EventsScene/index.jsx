/* eslint-disable react/jsx-closing-tag-location,padded-blocks */
import React, { Component } from 'react'
import { bool, object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import InfiniteScroll from 'react-infinite-scroller'

import EventCard from './EventCard'
import Loading from 'components/Loading'
import isEmpty from 'lodash/isEmpty'
import NotFound from 'components/NotFound'
import Search from 'components/Search'

import connector from './connector'
import Sort from 'components/Sort'

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
  search: {
    maxWidth: 1300,
    margin: '0 auto',
    padding: 30,
    paddingBottom: 0,
  },
})

class EvenetsScene extends Component {
  componentDidMount() {
    this.load(1)
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.buttonEvent.hideChoose()
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
    const { events: { loading, events }, isChoose, classes } = this.props
    if (loading) return <Loading />
    if (isEmpty(events)) return <NotFound />

    return <React.Fragment>
      <div className={classes.search}>
        <Search />
        <Sort />
      </div>
      <InfiniteScroll
        initialLoad
        pageStart={0}
        loadMore={this.load}
        hasMore={this.hasMore()}
        loader={<Loading />}
        className={classes.root}
      >
        {events.map(event => <EventCard isChoose={isChoose} key={event.id} event={event} />)}
      </InfiniteScroll>
    </React.Fragment>
  }
}

EvenetsScene.propTypes = {
  classes: object.isRequired,
  events: object.isRequired,
  actions: object.isRequired,
  isChoose: bool.isRequired,
}

export default withStyles(styles)(connector(EvenetsScene))
