/* eslint-disable object-curly-newline */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
// import Geosuggest from '../../Geosuggest'

const styles = theme => ({
  root: {
    paddingLeft: 11,
    borderRadius: 3,
    backgroundColor: theme.palette.common.white,
  },
  adornment: {
    marginTop: '8px',
    width: '30px',
    zIndex: '99999',
  },
  input: {
    // backgroundColor: 'black',
    padding: '15px 15px 15px 0px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  formLabel: {
    fontSize: 16,
  },
})

const PrimaryTextInput = ({ classes, icon, placeholder, ...rest }) =>
  <div>
    <TextField
      fullWidth
      placeholder={placeholder}
      {...rest}
      InputProps={{
        startAdornment: (
          <InputAdornment classes={{ root: classes.adornment }} position="start">
            {icon}
          </InputAdornment>
        ),
        disableUnderline: true,
        classes: {
          root: classes.root,
          input: classes.input,
        },
      }}
      InputLabelProps={{
        shrink: true,
        className: classes.formLabel,
      }}
    />
  </div>

PrimaryTextInput.propTypes = {
  placeholder: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  classes: PropTypes.object.isRequired,
}

PrimaryTextInput.defaultProps = {
  placeholder: '',
  icon: '',
}
export default withStyles(styles)(PrimaryTextInput)
