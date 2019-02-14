import React from 'react'
import { Button, CardActions, CardContent } from '@material-ui/core'
import { Field } from 'formik'
import FormikText from '../../formik/FormikText'
import formik from './formik'

const RegisterForm = () =>
  <div>
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
  </div>

RegisterForm.propTypes = {}

export default formik(RegisterForm)
