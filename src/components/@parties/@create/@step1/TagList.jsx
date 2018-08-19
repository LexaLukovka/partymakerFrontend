/* eslint-disable function-paren-newline */
import React from 'react'
import { func, array, string } from 'prop-types'
import TypeTag from './TypeTag'

class TagList extends React.Component {
  handleClick = type => () => {
    this.props.onSelect(type)
  }

  render() {
    const { partyTypes, selected } = this.props
    return partyTypes.map(tag =>
      <TypeTag
        key={tag.name}
        icon={tag.icon}
        selected={tag.name === selected}
        onClick={this.handleClick(tag.name)}
      >
        {tag.title}
      </TypeTag>,
    )
  }
}

TagList.propTypes = {
  onSelect: func,
  selected: string,
  partyTypes: array.isRequired,
}

TagList.defaultProps = {
  onSelect: () => {},
  selected: null,
}

export default TagList
