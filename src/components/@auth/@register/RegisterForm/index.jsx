import React from 'react'
import { object } from 'prop-types'
import { Button, Card, CardActions, CardContent, withStyles } from '@material-ui/core'
import { Field } from 'formik'
import FormikText from '../../formik/FormikText'
import formik from './formik'

const styles = {
  root: {
    padding: 20,
    width: 350,
    borderRadius: 8,
  },
}

const RegisterForm = ({ classes }) =>
  <Card className={classes.root}>
    <CardContent>
      <Field
        name="name"
        label="Имя и фамилия"
        placeholder="Вася Пупкин"
        component={FormikText}
      />
      <Field
        name="email"
        label="Email"
        placeholder="email@example.com"
        component={FormikText}
      />
      <Field
        name="password"
        label="Пароль"
        placeholder="*******"
        component={FormikText}
      />
    </CardContent>
    <CardActions>
      <Button fullWidth variant="contained" type="submit" color="primary">
        Зарегистрироваться
      </Button>
    </CardActions>
  </Card>

RegisterForm.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(formik(RegisterForm))
