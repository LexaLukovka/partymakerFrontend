import React from 'react'
import { object } from 'prop-types'
import { CardContent, withStyles } from '@material-ui/core'
import AuthCardActions from 'src/components/@auth/Card/AuthCardActions'
import { Field, Form } from 'formik'
import FormikText from '../../formik/FormikText'
import connector from './connector'
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
          component={FormikText}
        />
        <Field
          name="email"
          label="Email"
          placeholder="email@example.com"
          component={FormikText}
        />
        <Field
          type="password"
          name="password"
          label="Пароль"
          placeholder="*******"
          component={FormikText}
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

export default withStyles(styles)(connector(formik(RegisterForm)))
