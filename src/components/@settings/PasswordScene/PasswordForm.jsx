import React from 'react'
import { object } from 'prop-types'
import { withStyles, Typography, TextField } from '@material-ui/core'

const styles = theme => ({
  input: {
    marginBottom: theme.spacing.size3,
  },
})

const PasswordForm = ({ classes }) =>
  <div>
    <div className={classes.input}>
      <Typography variant="subheading">Введите старый пароль</Typography>
      <TextField
        fullWidth
        type="password"
        name="oldPassword"
        placeholder="Старый пароль"
      />
    </div>
    <div className={classes.input}>
      <Typography variant="subheading">Введите новый пароль</Typography>
      <TextField
        fullWidth
        type="password"
        name="newPassword"
        placeholder="Новый пароль"
      />
    </div>
    <div className={classes.input}>
      <Typography variant="subheading">Повторите новый пароль</Typography>
      <TextField
        fullWidth
        type="password"
        name="repeatPassword"
        placeholder="Повторите новый пароль"
      />
    </div>
  </div>

PasswordForm.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(PasswordForm)
