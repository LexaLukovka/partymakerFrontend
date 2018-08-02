/* eslint-disable function-paren-newline */
import React from 'react'
import { object, func } from 'prop-types'
import TypeTag from './TypeTag'
import partyTypes from 'src/mock/partyTypes.json'

class TagList extends React.Component {
  handleClick = type => () => {
    this.props.onSelect(type)
  }

  render() {
    return partyTypes.map(tag =>
      <TypeTag
        key={tag.name}
        icon={tag.icon}
        onClick={this.handleClick(tag.name)}
      >
        {tag.title}
      </TypeTag>,
    )
  }
}

TagList.propTypes = {
  onSelect: func,
}
TagList.defaultProps = {
  onSelect: () => {},
}
export default TagList
