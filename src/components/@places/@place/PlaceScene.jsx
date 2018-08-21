/* eslint-disable camelcase */
import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button/Button'
import isEmpty from 'lodash/isEmpty'
import Loading from 'components/Loading'
import NotFound from 'components/NotFound'
import Carousel from 'components/Carousel'
import connector from './connector'
import PlaceCard from './PlaceCard'
import Parties from './Parties'
import { Link } from 'react-router-dom'

const styles = (theme) => ({
  root: {
    overflowX: 'hidden',
    position: 'relative',
    height: '100%',
    background: theme.palette.common.white,
  },
  loading: {
    marginTop: 20,
    textAlign: 'center',
  },
  container: {
    display: 'flex',
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },

  create: {
    padding: 20,
    textAlign: 'center',
  },
})

class PlaceScene extends React.Component {
  componentDidMount() {
    const { actions, match } = this.props
    const place_id = match.params.id
    actions.place.show(place_id)
    actions.parties.load({ place_id })

    actions.header.back()
  }

  componentDidUpdate() {
    const { place: { place } } = this.props
    if (!isEmpty(place)) document.title = place.title
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.menu()
  }

  render() {
    const { classes, place: { loading, place }, parties } = this.props
    if (loading) return <Loading />
    if (isEmpty(place)) return <NotFound />

    return (
      <div className={classes.root}>
        <Carousel pictures={place.pictures} />
        <PlaceCard place={place} />
        <div className={classes.create}>
          <Link to={`/parties/create?place_id=${place.id}`}>
            <Button color="primary">Создать здесь свою вечеринку</Button>
          </Link>
        </div>
        <Parties parties={parties} />
      </div>
    )
  }
}

PlaceScene.propTypes = {
  classes: object.isRequired,
  place: object.isRequired,
  parties: object.isRequired,
  actions: object.isRequired,
  match: object.isRequired,
}

export default withStyles(styles)(connector(PlaceScene))
