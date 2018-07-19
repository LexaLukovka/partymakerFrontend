import React from 'react'
import { arrayOf, object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import connector from './connector'
import Container from '../Container'
import PartyCard from './PartyCard'
import Carousel from './Carousel'
import Button from '@material-ui/core/es/Button/Button'

const styles = (theme) => ({
  root: {
    overflow: 'hidden',
    position: 'relative',
    height: 800,
    background: theme.palette.common.white,
  },

  paper: {
    position: 'absolute',
    left: 0,
    right: 0,
    margin: 10,
    bottom: 0,
  },
})

const PartyScene = ({ classes, party }) =>
  <Container className={classes.root}>
    <Carousel pictures={party.picture_urls} />
    <div className={classes.paper}>
      <PartyCard
        amount={party.amount}
        count={party.people_count}
        address={party.address}
        description={party.description}
      />
      <Button variant="raised" size="large" fullWidth color="primary">Я ПОЙДУ</Button>
    </div>

  </Container>

PartyScene.propTypes = {
  classes: object.isRequired,
  party: object.isRequired,
}

export default withStyles(styles)(connector(PartyScene))
