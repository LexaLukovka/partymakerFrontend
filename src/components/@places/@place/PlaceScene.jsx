/* eslint-disable camelcase */
import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import { Button, Grid, withStyles } from '@material-ui/core'
import isEmpty from 'lodash/isEmpty'
import Loading from 'components/Loading'
import NotFound from 'components/NotFound'
import connector from './connector'
import PlaceCard from './PlaceCard'
import Parties from './Parties'
import PictureGrid from './PictureGrid'

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
  article: {
    margin: '0 auto',
    maxWidth: 800,
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
  openModal = (picture_url) => {
    const { actions } = this.props
    actions.pictureModal.show(picture_url)
  }

  render() {
    const { classes, place: { loading, place }, placeVotes: { vote }, groups } = this.props
    if (loading) return <Loading />
    if (isEmpty(place)) return <NotFound />

    return (
      <Grid container className={classes.root} alignItems="stretch">
        <Grid item sm={12} md={5} lg={3} xl={3} className={classes.info}>
          <PlaceCard
            place={place}
            onVote={this.handleVote}
            vote={vote}
          />

        </Grid>
        <Grid item sm={12} md={7} lg={6} xl={6} style={{ overflow: 'auto' }}>
          <PictureGrid pictures={place.pictures.map(picture => picture.url)} onClick={this.openModal} />

        </Grid>
        <Grid item lg={3} style={{ overflow: 'auto' }}>
          <div className={classes.create}>
            <Link to={`/parties/create?place_id=${place.id}`}>
              <Button color="primary">Создать здесь свою вечеринку</Button>
            </Link>
          </div>
          <Parties groups={groups} />
        </Grid>
      </Grid>
    )
  }
}

PlaceScene.propTypes = {
  classes: object.isRequired,
  place: object.isRequired,
  placeVotes: object.isRequired,
  groups: object.isRequired,
  actions: object.isRequired,
  match: object.isRequired,
  auth: object.isRequired,
}

export default withStyles(styles)(connector(PlaceScene))
