import React from 'react'
import { object, string, shape, func } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { TextField, Typography } from '@material-ui/core'

const styles = {
  root: {
    padding: '5px 0',
  },
}

const TitleInput = ({ classes, values, handleChange, handleBlur, errors, touched }) =>
  <div className={classes.root}>
    <Typography variant="subheading">Название вечеринки</Typography>
    <TextField
      fullWidth
      name="title"
      placeholder="Название"
      value={values.title}
      onChange={handleChange}
      onBlur={handleBlur}
      error={!!errors.title && touched.title}
      helperText={errors.title}
    />
  </div>

TitleInput.propTypes = {
  classes: object.isRequired,
  values: shape({
    title: string,
  }).isRequired,
  handleChange: func.isRequired,
  handleBlur: func.isRequired,
  errors: shape({
    title: string,
  }).isRequired,
  touched: object.isRequired,

}

export default withStyles(styles)(TitleInput)
