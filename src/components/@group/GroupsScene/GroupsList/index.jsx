import React from 'react'
import { array } from 'prop-types'
import GroupsCard from './GroupsCard'

const PartiesList = ({ groups }) =>
  groups.map(group =>
    <GroupsCard
      key={group.id}
      group={group}
    />)

PartiesList.propTypes = {
  groups: array.isRequired,
}

export default PartiesList
