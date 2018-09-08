/* eslint-disable react/sort-comp,padded-blocks,no-console */
import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { Button, CardActions, CardContent, Typography } from '@material-ui/core'
import FormikText from 'components/@auth/formik/FormikText'
import FormikPasswordToggle from 'components/@auth/formik/FormikPasswordToggle'
import formik from './formik'
import connector from '../../connector'
import { Field } from 'formik'

const LoginForm = ({ isSubmitting, handleSubmit }) =>
  <form onSubmit={handleSubmit}>
    <CardContent>
      <Field
        label="Email"
        component={FormikText}
        name="email"
        type="email"
        placeholder="email@example.com"
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
        Войти
      </Button>
    </CardActions>
    <Link to="/auth/register">
      <Typography gutterBottom align="center">Забыли пароль? | Нет аккаунта?</Typography>
    </Link>
  </form>

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
}

export default connector(withRouter(formik(LoginForm)))
