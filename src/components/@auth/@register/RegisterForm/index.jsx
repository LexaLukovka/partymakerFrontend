import React from 'react'
import { object } from 'prop-types'
import { CardContent, withStyles } from '@material-ui/core'
import AuthCardActions from 'components/@auth/Card/AuthCardActions'
import { Field, Form } from 'formik'
import FormikTextField from 'components/formik/FormikTextField'
import formik from './formik'

const styles = {
  root: {
    color: '#0083bc'
  },
}

const RegisterForm = ({ classes }) =>
  <div className={classes.root}>
    <Form>
      <CardContent>
        <Field
          name="name"
          label="Имя и фамилия"
          placeholder="Вася Пупкин"
          component={FormikTextField}
        />
        <Field
          name="email"
          label="Email"
          placeholder="email@example.com"
          component={FormikTextField}
        />
        <Field
          type="password"
          name="password"
          label="Пароль"
          placeholder="*******"
          component={FormikTextField}
        />
      </CardContent>
      <AuthCardActions
        textButton="Дальше"
        linkTo="/auth/login"
        textLink="Уже есть аккаунт?"
      />
    </Form>
  </div>

RegisterForm.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(formik(RegisterForm))
