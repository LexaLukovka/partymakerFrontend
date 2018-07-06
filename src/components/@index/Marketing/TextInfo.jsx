/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'

const style = {
  height: '450px',
  backgroundColor: '#09091A',
}

const TextInfo = ({ children }) =>
  <div style={style}>
    {children}
  </div>

TextInfo.propTypes = {
  children: PropTypes.any,
}

TextInfo.defaultProps = {
  children: '',
}

export default TextInfo
