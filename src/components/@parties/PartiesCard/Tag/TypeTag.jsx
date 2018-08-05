/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react'
import { object, func, string } from 'prop-types'
import Icon from '@material-ui/core/es/Icon/Icon'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  click: {
    background: '#AC07B2',
    color: 'white',
  },
  circle: {
    position: 'absolute',
    width: 40,
    height: 40,
    textAlign: 'center',
    overflow: 'hidden',
    background: '#AC07B2',
    padding: 3,
    borderRadius: '50%',
  },
  input: {
    paddingTop: 3,
    display: 'block',
    background: 'white',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
  },
  icon: {
    fontSize: 28,
  },
}

const TypeTag = ({ classes, icon }) =>
  <div className={classes.circle}>
    <div className={classes.input}>
      <Icon className={classes.icon} color="primary">
        {icon}
      </Icon>
    </div>
  </div>

TypeTag.propTypes = {
  classes: object.isRequired,
  icon: string.isRequired,
}

export default withStyles(styles)(TypeTag)
