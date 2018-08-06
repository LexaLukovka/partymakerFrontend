import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/es/TextField/TextField'

const styles = theme => ({
  root: {
    paddingTop: 23,
  },
  input: {
    marginBottom: theme.spacing.size3,
  },
})

const PasswordScene = ({ classes }) =>
  <div className={classes.root}>
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
    <Button
      variant="raised"
      color="primary"
    >
      Сохранить
    </Button>
  </div>

PasswordScene.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PasswordScene)
