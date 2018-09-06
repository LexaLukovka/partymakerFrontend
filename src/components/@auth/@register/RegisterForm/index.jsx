/* eslint-disable react/sort-comp,padded-blocks,no-console */
import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { Button, CardActions, CardContent, Typography } from '@material-ui/core'
import FormikText from 'components/@auth/formik/FormikText'
import FormikPasswordToggle from 'components/@auth/formik/FormikPasswordToggle'
import FormikPhone from 'components/@auth/formik/FormikPhone'
import formik from './formik'
import connector from '../../connector'
import { Field } from 'formik'

const RegisterForm = ({ isSubmitting, handleSubmit }) =>
  <form onSubmit={handleSubmit}>
    <CardContent>
      <Field
        label="Имя и фамилия"
        component={FormikText}
        name="name"
        type="name"
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
        placeholder="*******"
      />
      <Field
        label="Пароль"
        name="password"
        component={FormikPasswordToggle}
        placeholder="*******"
      />
    </CardContent>
    <CardActions>
      <Button fullWidth variant="raised" type="submit" color="primary" disabled={isSubmitting}>
        Зарегистрироваться
      </Button>
    </CardActions>
    <Link to="/auth/login">
      <Typography gutterBottom align="center">Уже есть аккаунт? Войти</Typography>
    </Link>
  </form>

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
}

export default connector(withRouter(formik(RegisterForm)))
