/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Icon } from '@material-ui/core'

const styles = {
  inline: {
    display: 'inline-block',
    width: 120,
    height: 120,
    margin: '0.25rem',
    borderRadius: '8%',
    '&:hover': {
      background: '#D404DC',
      color: 'white',
    },
    '@media only screen and (max-width: 640px)': {
      width: 100,
      height: 100,
    },
  },
  click: {
    background: '#AC07B2',
    color: 'white',
  },
  circle: {
    width: 70,
    height: 70,
    marginLeft: 25,
    marginTop: 15,
    textAlign: 'center',
    overflow: 'hidden',
    background: '#AC07B2',
    padding: 3,
    borderRadius: '50%',
    '@media only screen and (max-width: 640px)': {
      marginLeft: 15,
      marginTop: 10,
    },
  },
  input: {
    paddingTop: 10,
    display: 'block',
    background: 'white',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
  },
  icon: {
    fontSize: 42,
  },
}

const TypeTag = ({ classes, onClick, icon, children }) =>
  <div onClick={onClick} className={classes.inline}>
    <div className={classes.circle}>
      <div className={classes.input}>
        <Icon className={classes.icon} color="primary">
          {icon}
        </Icon>
      </div>
    </div>
    <Typography color="inherit" variant="body1">{children}</Typography>
  </div>

TypeTag.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.string,
  children: PropTypes.string,
}

TypeTag.defaultProps = {
  onClick: () => {},
  icon: 'home',
  children: 'No name',
}

export default withStyles(styles)(TypeTag)
