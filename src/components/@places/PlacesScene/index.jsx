import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import InfiniteScroll from 'react-infinite-scroller'

import Loading from 'components/Loading'
import PlacesCard from './PlacesCard'

import isEmpty from 'lodash/isEmpty'
import connector from './connector'

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
    gridGap: '15px',
    gridTemplateColumns: '1fr',

    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: '370px',
    },

    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '370px 370px',
    },

    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: '400px 400px 400px',
    },
  },
})

class PlacesScene extends React.Component {
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
    const { classes, places: { loading, places } } = this.props
    if (loading) return <Loading />
    if (isEmpty(places)) return null

    return <div className={classes.root}>
      <InfiniteScroll
        initialLoad
        pageStart={0}
        loadMore={this.load}
        hasMore={this.hasMore()}
        loader={<Loading />}
        className={classes.container}
      >
        {Object.values(places).map(place => <PlacesCard key={place.id} place={place} />)}
      </InfiniteScroll>
    </div>
  }
}

PlacesScene.propTypes = {
  classes: object.isRequired,
  places: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(PlacesScene))
