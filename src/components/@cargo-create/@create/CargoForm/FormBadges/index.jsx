/* eslint-disable function-paren-newline */
/* eslint-disable-next-line object-curly-newline */
import React from 'react'
import PropTypes from 'prop-types'
import Badge from './FormBadge'
import connector from '../connector'
import filterBadges from '../../../../../utils/filterBadges'

const FilterBadges = ({ badges, selected, actions }) => {
  const filteredBadges = filterBadges(badges, selected)

  return filteredBadges.map(obj => {
    const value = Object.values(obj)[0]
    const key = Object.keys(obj)[0]
    return (
      <Badge
        onClick={() => actions.cargoForm.add(key)}
        key={key}
      >
        {value}
      </Badge>
    )
  })
}

FilterBadges.propTypes = {
  badges: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
}

export default connector(FilterBadges)
