/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus */
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
  root: {
    margin: theme.spacing.size1,
    display: 'inline-flex',
    alignItems: 'center',
    padding: `0.2rem ${theme.spacing.size1}`,
    borderRadius: 2,
    boxShadow: theme.shadows[1],
    color: theme.palette.common.white,
    background: theme.palette.primary.main,
    fontSize: theme.typography.caption,
  },
  label: {
    marginTop: '-0.05rem',
    fontSize: theme.typography.caption.fontSize,
    paddingLeft: '0.1rem',
    paddingRight: theme.spacing.size1,
  },

  value: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    borderRadius: 1,
    background: theme.palette.common.white,
    color: theme.palette.common.black,
    padding: '2px 5px',
    fontSize: theme.typography.caption.fontSize,
  },
})
const CargoBadge = ({ classes, label, value }) => {
  if (!value) return null
  if (!value.length) return null
  return (
    <span
      role="button"
      className={classes.root}
    >
      <span className={classes.label}>{label}</span>
      <span className={classes.value}>{value}</span>
    </span>
  )
}

CargoBadge.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
}

export default withStyles(styles)(CargoBadge)
