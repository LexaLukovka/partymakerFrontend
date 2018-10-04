import React, { Component } from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Loading from 'components/Loading'
import isEmpty from 'lodash/isEmpty'
import NotFound from 'components/NotFound'
import connector from '../connector'
import PlacesCard from './PlacesCard'
import Search from 'components/Search'
import Sort from 'components/Sort'

const styles = theme => ({
  search: {
    maxWidth: 1300,
    margin: '0 auto',
    padding: 40,
    paddingBottom: 0,
  },
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

class PlacesScene extends Component {
  componentWillMount() {
    const { actions, places } = this.props
    if (!places.allLoaded) actions.places.load()

    document.title = 'Места где погулять в Запорожье'
  }

  render() {
    const { places: { loading, places }, classes } = this.props
    if (loading) return <Loading />
    if (isEmpty(places)) return <NotFound />

    return (
      <React.Fragment>
        <div className={classes.search}>
          <Search />
          <Sort />
        </div>
        <div className={classes.root}>
          {Object.values(places).map(place => <PlacesCard key={place.id} place={place} />)}
        </div>
      </React.Fragment>
    )
  }
}

PlacesScene.propTypes = {
  classes: object.isRequired,
  places: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(PlacesScene))
