import React from 'react'
import { object, string, shape, func } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Geosuggest from 'components/Geosuggest'

const styles = {
  root: {
    padding: '5px 0',
  },
}
const AddressInput = ({ classes, values, setFieldValue, setFieldTouched, errors, touched }) =>
  <div className={classes.root}>
    <Typography variant="subheading">По какому адресу?</Typography>
    <Geosuggest
      fullWidth
      name="address"
      placeholder="Адрес"
      value={values.address}
      onChange={setFieldValue}
      onBlur={setFieldTouched}
      error={!!errors.address && touched.address}
      helperText={errors.address}
    />
  </div>

AddressInput.propTypes = {
  classes: object.isRequired,
  values: shape({
    address: object,
  }).isRequired,
  setFieldValue: func.isRequired,
  setFieldTouched: func.isRequired,
  errors: shape({
    address: string,
  }).isRequired,
  touched: object.isRequired,

}

export default withStyles(styles)(AddressInput)
