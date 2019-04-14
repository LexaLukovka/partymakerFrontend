import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import { CardContent, Typography, withStyles } from '@material-ui/core'
import AuthCardActions from 'components/@auth/Card/AuthCardActions'
import FormikTextField from 'components/formik/FormikTextField'
import { Field, Form } from 'formik'
import formik from './formik'

const styles = {
  root: {
    color: '#0083bc'
  },
  link: {
    marginTop: 10,
    marginLeft: 20,
  },
}

const ResetForm = ({ classes }) =>
  <div className={classes.root}>
    <Form>
      <CardContent>
        <Field
          type="password"
          name="passsword"
          placeholder="*******"
          label="Введите новый пароль"
          component={FormikTextField}
        />
        <Field
          type="password"
          name="password_repeat"
          placeholder="*******"
          label="Повторите новый пароль"
          component={FormikTextField}
        />
      </CardContent>
      <AuthCardActions
        textButton="Готово"
        linkTo="/auth/login"
        textLink="Войти"
      />
      <Link to="/auth/register">
        <Typography className={classes.link} color="inherit">
          Создать аккаунт
        </Typography>
      </Link>
    </Form>
  </div>

ResetForm.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(formik(ResetForm))
