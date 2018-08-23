import React from 'react'
import { array, func } from 'prop-types'
import PartiesCard from './PartiesCard'

const PartiesList = ({ parties, onLike }) =>
  parties.map(party =>
    <PartiesCard
      key={party.id}
      party={party}
      onLike={onLike}
    />)

PartiesList.propTypes = {
  parties: array.isRequired,
  onLike: func,
}

PartiesList.defaultProps = {
  onLike: () => {},
}

export default PartiesList
