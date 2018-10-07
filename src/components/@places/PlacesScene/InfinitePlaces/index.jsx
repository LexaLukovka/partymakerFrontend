import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import InfiniteScroll from 'react-infinite-scroller'

import Loading from 'components/Loading'
import NotFound from 'components/NotFound'
import PlacesCard from '../PlacesCard'

import isEmpty from 'lodash/isEmpty'
import connector from '../../connector'

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

class InfinitePlaces extends React.Component {
  componentDidMount() {
    const { places } = this.props
    if (!places.allLoaded) this.load(1)

    document.title = 'Места где погулять в Запорожье'
  }

  load = (page) => {
    const { actions } = this.props
    actions.places.load({ page })
  }

  hasMore = () => {
    const { places: { total, limit, page } } = this.props
    const items = page * limit
    return total >= items
  }

  render() {
    const { places: { loading, places }, classes } = this.props
    if (loading) return <Loading />
    if (isEmpty(places)) return <NotFound />
    return <InfiniteScroll
      initialLoad
      pageStart={0}
      loadMore={this.load}
      hasMore={this.hasMore()}
      loader={<Loading />}
      className={classes.root}
    >
      {Object.values(places).map(place => <PlacesCard key={place.id} place={place} />)}
    </InfiniteScroll>
  }
}

InfinitePlaces.propTypes = {
  classes: object.isRequired,
  places: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(InfinitePlaces))
