import React from 'react'
import { arrayOf, object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/es/Grid/Grid'
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
    <Grid container justify="center">
      {parties.map((party, index) => <PartiesCard key={index} party={party} />)}
    </Grid>
  </Container>

PartiesScene.propTypes = {
  classes: object.isRequired,
  parties: arrayOf(object).isRequired,
}

export default withStyles(styles)(connector(PartiesScene))
