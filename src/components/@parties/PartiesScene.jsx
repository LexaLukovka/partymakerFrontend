import React from 'react'
import { arrayOf, object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import connector from './connector'
import PartiesCard from './PartiesCard'
import Container from '../Container'

const styles = {
  root: {
    marginTop: 15,
  },
}

const PartiesScene = ({ classes, parties }) =>
  <Container className={classes.root}>
    {parties.map(party => <PartiesCard key={party.id} party={party} />)}
  </Container>

PartiesScene.propTypes = {
  classes: object.isRequired,
  parties: arrayOf(object).isRequired,
}

export default withStyles(styles)(connector(PartiesScene))
