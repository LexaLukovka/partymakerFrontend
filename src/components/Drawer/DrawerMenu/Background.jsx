/* eslint-disable react/forbid-prop-types,max-len */
import React from 'react'
import PropTypes from 'prop-types'
import { BACKEND_URL } from 'services/constants'

const url = `${BACKEND_URL}/images/Gec.jpg`
const style = {
  backgroundImage: `url(${url})`,
  backgroundSize: 'cover',
  height: '200px',
  position: 'relative',
}

const Background = ({ children }) =>
  <div style={style}>
    {children}
  </div>

Background.propTypes = {
  children: PropTypes.any,
}

Background.defaultProps = {
  children: '',
}

export default Background
