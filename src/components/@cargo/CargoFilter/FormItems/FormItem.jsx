/* eslint-disable object-curly-newline,jsx-a11y/click-events-have-key-events */
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/es/Typography/Typography'
import Icon from '@material-ui/core/es/Icon/Icon'

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.size3,
  },
  icon: {
    cursor: 'pointer',
    color: theme.palette.error.dark,
    fontSize: theme.typography.caption.fontSize,
  },
})

const FormItem = ({ title, children, classes, onClose, isRequired }) =>
  <div className={classes.root}>
    <Typography variant="subheading">
      {!isRequired ?
        <a role="button" tabIndex="1" onClick={onClose}>
          <Icon className={classes.icon}>close</Icon>
        </a> : <Icon className={classes.icon}>*</Icon>}
      {title}
    </Typography>
    {children}
  </div>

FormItem.propTypes = ({
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isRequired: PropTypes.bool,
  onClose: PropTypes.func,
  classes: PropTypes.object.isRequired,
})

// noinspection JSUnusedGlobalSymbols
FormItem.defaultProps = {
  onClose: () => {},
  isRequired: false,
}

export default withStyles(styles)(FormItem)
