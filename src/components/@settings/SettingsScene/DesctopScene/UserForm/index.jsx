import React from 'react'
import { func, object } from 'prop-types'
import { Button, Grid, withStyles } from '@material-ui/core'

import FormikText from './formik/FormikText'
import FormikPhone from './formik/FormikPhone'
import FormikInstTelega from './formik/FormikInstTelega'

import { Field } from 'formik'
import formik from './formik/formik'

const styles = () => ({
  root: {
    padding: 25,
  },
  button: {
    marginTop: 10,
  },
})

const UserForm = ({ classes, handleSubmit }) =>
  <form onSubmit={handleSubmit} className={classes.root}>
    <Field
      label="Имя и фамилия"
      component={FormikText}
      name="name"
      placeholder="Вася Пупкин"
    />
    <Field
      label="Email"
      component={FormikText}
      name="email"
      type="email"
      placeholder="email@example.com"
    />
    <Field
      label="Номер телефона"
      name="phone"
      component={FormikPhone}
    />
    <Field
      label="Instagram"
      component={FormikInstTelega}
      name="instagram"
      placeholder="example"
    />
    <Field
      label="Telegram"
      component={FormikInstTelega}
      name="telegram"
      placeholder="example"
    />
    <Grid container justify="flex-end">
      <Button color="primary" className={classes.button} type="submit">
        Сохранить
      </Button>
    </Grid>
  </form>

UserForm.propTypes = {
  classes: object.isRequired,
  handleSubmit: func.isRequired,
}

export default formik(withStyles(styles)(UserForm))
