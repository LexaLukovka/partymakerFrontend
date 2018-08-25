/* eslint-disable camelcase */
import React from 'react'
import { object } from 'prop-types'
import { Button, Grid, withStyles } from '@material-ui/core'
import isEmpty from 'lodash/isEmpty'
import Loading from 'components/Loading'
import NotFound from 'components/NotFound'
import Carousel from 'components/Carousel'
import connector from './connector'
import PlaceCard from './PlaceCard'
import Parties from './Parties'
import { Link } from 'react-router-dom'

const styles = () => ({
  root: {
    overflowX: 'hidden',
    position: 'relative',
    height: '100%',
    background: 'white',
  },

  create: {
    padding: 20,
    textAlign: 'center',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
  },
})

class PlaceScene extends React.Component {
  componentDidMount() {
    const { actions, match, auth } = this.props
    const place_id = match.params.id
    actions.place.show(place_id)
    actions.parties.load({ place_id })
    if (auth.user) actions.placeVotes.isUserVoted(place_id)
    actions.header.back()
  }

  componentDidUpdate() {
    const { place: { place } } = this.props
    if (!isEmpty(place)) document.title = place.title
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.menu()
    actions.placeVotes.reset()
  }

  handleVote = rating => {
    const { actions, place: { place } } = this.props
    actions.placeVotes.vote(place.id, rating)
  }

  render() {
    const { classes, place: { loading, place }, placeVotes: { vote }, parties } = this.props
    if (loading) return <Loading />
    if (isEmpty(place)) return <NotFound />

    return (
      <Grid container className={classes.root} alignItems="stretch">
        <Grid item sm={12} md={5} lg={4} xl={3} className={classes.info}>
          <Carousel pictures={place.pictures} />
          <PlaceCard
            place={place}
            onVote={this.handleVote}
            vote={vote}
          />
        </Grid>
        <Grid item sm={12} md={7} lg={8} xl={9}>
          <div className={classes.create}>
            <Link to={`/parties/create?place_id=${place.id}`}>
              <Button color="primary">Создать здесь свою вечеринку</Button>
            </Link>
          </div>
          <Parties parties={parties} />
        </Grid>
      </Grid>
    )
  }
}

PlaceScene.propTypes = {
  classes: object.isRequired,
  place: object.isRequired,
  placeVotes: object.isRequired,
  parties: object.isRequired,
  actions: object.isRequired,
  match: object.isRequired,
  auth: object.isRequired,
}

export default withStyles(styles)(connector(PlaceScene))
