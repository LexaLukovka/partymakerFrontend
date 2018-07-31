/* eslint-disable react/forbid-prop-types,max-len */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

const url = 'http://localhost:3333/images/summer.jpg'

const style = {
  root: {
    backgroundImage: `url(${url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
}

const Background = ({ classes, children }) =>
  <div className={classes.root}>
    {children}
  </div>

Background.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any,
}

Background.defaultProps = {
  children: '',
}

export default withStyles(style)(Background)
