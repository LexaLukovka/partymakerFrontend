import React from 'react'
import { object, string, shape, func } from 'prop-types'
import { withStyles, TextField, Typography } from '@material-ui/core'

const styles = {
  root: {
    padding: '5px 0',
  },
}

const TelegramInput = ({ classes, values, handleChange, handleBlur, errors, touched }) =>
  <div className={classes.root}>
    <Typography variant="subheading">Telegram вечерики</Typography>
    <TextField
      fullWidth
      name="telegram_url"
      placeholder="Беседа"
      value={values.telegram_url}
      onChange={handleChange}
      onBlur={handleBlur}
      error={!!errors.telegram_url && touched.telegram_url}
      helperText={errors.telegram_url}
    />
  </div>

TelegramInput.propTypes = {
  classes: object.isRequired,
  values: shape({
    telegram_url: string,
  }).isRequired,
  handleChange: func.isRequired,
  handleBlur: func.isRequired,
  errors: shape({
    telegram_url: string,
  }).isRequired,
  touched: object.isRequired,
}

export default withStyles(styles)(TelegramInput)
