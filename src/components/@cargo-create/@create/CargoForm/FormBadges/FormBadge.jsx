/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus */
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Icon from '@material-ui/core/es/Icon/Icon'

const styles = theme => ({
  root: {
    cursor: 'pointer',
    margin: theme.spacing.size1,
    display: 'inline-flex',
    alignItems: 'center',
    padding: `0.1rem ${theme.spacing.size1}`,
    borderRadius: 2,
    boxShadow: theme.shadows[1],
    color: theme.palette.common.white,
    background: theme.palette.primary.main,
    fontSize: theme.typography.caption,
  },
  text: {
    marginTop: '-0.12rem',
    fontSize: theme.typography.caption.fontSize,
    paddingLeft: '0.1rem',
    paddingRight: theme.spacing.size1,
  },

  icon: {
    fontSize: '1rem',
  },
})
const FormBadge = ({ classes, children, onClick }) =>
  <span
    role="button"
    className={classes.root}
    onClick={onClick}
  >
    <Icon className={classes.icon}>add</Icon>
    <span className={classes.text}>{children}</span>
  </span>

FormBadge.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

// noinspection JSUnusedGlobalSymbols
FormBadge.defaultProps = {
  onClick: () => {},
}

export default withStyles(styles)(FormBadge)
