import React from 'react'
import { Button, CardActions, CardContent } from '@material-ui/core'
import { Field, Form } from 'formik'
import FormikText from '../../formik/FormikText'
import formik from './formik'
import connector from '../../connector'

const RegisterForm = () =>
  <div>
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
      <CardActions>
        <Button fullWidth variant="contained" type="submit" color="primary">
          Зарегистрироваться
        </Button>
      </CardActions>
    </Form>
  </div>

RegisterForm.propTypes = {}

export default connector(formik(RegisterForm))
