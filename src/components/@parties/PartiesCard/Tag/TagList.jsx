/* eslint-disable function-paren-newline */
import React from 'react'
import { string } from 'prop-types'
import TypeTag from './TypeTag'
import partyTypes from 'src/mock/partyTypes.json'

const TagList = ({ iconTag }) =>
  <div>
    {partyTypes.map(tag =>
      iconTag === tag.name &&
      <TypeTag
        key={tag.name}
        icon={tag.icon}
      />)}
  </div>

TagList.propTypes = {
  iconTag: string.isRequired,
}

export default TagList
