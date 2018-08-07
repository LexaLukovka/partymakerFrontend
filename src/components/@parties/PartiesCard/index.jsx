import React from 'react'
import { array } from 'prop-types'
import Grid from '@material-ui/core/es/Grid/Grid'
import Card from './Card'
import connector from '../connector'

const PartiesForm = ({ parties }) =>
  <Grid container justify="center">
    {parties.map((party, index) => <Card key={index} party={party} />)}
  </Grid>

PartiesForm.propTypes = {
  parties: array,
}

PartiesForm.defaultProps = {
  parties: [],
}

export default connector(PartiesForm)
