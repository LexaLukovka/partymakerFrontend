import React from 'react'
import { array, func } from 'prop-types'
import Grid from '@material-ui/core/es/Grid/Grid'
import PartiesCard from './PartiesCard'

const PartiesList = ({ parties, onLike }) =>
  <Grid container justify="center">
    {
      parties.map(party =>
        <PartiesCard
          key={party.id}
          party={party}
          onLike={onLike}
        />)
    }
  </Grid>

PartiesList.propTypes = {
  parties: array.isRequired,
  onLike: func.isRequired,
}

export default PartiesList
