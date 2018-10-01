import React from 'react'
import { func, object } from 'prop-types'
import { Button, Grid, withStyles } from '@material-ui/core'
import Errors from './Errors'

import FormikPassword from './formik/FormikPassword'
import formik from './formik/formik'
import { Field } from 'formik'

import connector from '../../../connector'

const styles = () => ({
  root: {
    padding: 25,
  },
  button: {
    marginTop: 10,
  },
})

const UserFormPassword = ({ classes, values, errors, handleSubmit }) =>
  <form onSubmit={handleSubmit} className={classes.root}>
    <Field
      name="oldPassword"
      label="Старый пароль"
      placeholder="******"
      component={FormikPassword}
    />
    <Field
      name="password"
      label="Новый пароль"
      placeholder="******"
      component={FormikPassword}
    />
    <Field
      name="repeatPassword"
      label="Повторите новый пароль"
      placeholder="******"
      component={FormikPassword}
    />
    {
      !errors.repeatPassword && values.password !== values.repeatPassword &&
      <Errors> Пароли не совпадают </Errors>
    }
    <Grid container justify="flex-end">
      <Button color="primary" className={classes.button} type="submit">
        Сохранить
      </Button>
    </Grid>
  </form>

UserFormPassword.propTypes = {
  classes: object.isRequired,
  values: object.isRequired,
  errors: object.isRequired,
  handleSubmit: func.isRequired,
}

export default connector(formik(withStyles(styles)(UserFormPassword)))
