import React from 'react'
import { number, object } from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { CardContent, Typography, withStyles } from '@material-ui/core'
import AuthCardActions from 'src/components/@auth/Card/AuthCardActions'
import { Field, Form } from 'formik'
import FormikText from '../../formik/FormikText'
import formik from './formik'
import connector from './connector'

const styles = {
  root: {
    color: '#0083bc'
  },
  link: {
    marginTop: 10,
    marginLeft: 20,
  },
}

const LoginForm = ({ classes, auth: { errors }, submitCount }) =>
  <div className={classes.root}>
    <Form>
      <CardContent>
        <Field
          name="email"
          label="Email"
          error={(submitCount > 0) && !!errors['email']}
          helperText={(submitCount > 0) && errors['email']}
          placeholder="email@example.com"
          component={FormikText}
        />
        <Field
          type="password"
          name="password"
          label="Пароль"
          error={(submitCount > 0) && !!errors['password']}
          helperText={(submitCount > 0) && errors['password']}
          placeholder="*******"
          component={FormikText}
        />
      </CardContent>
      <AuthCardActions
        textButton="Войти"
        linkTo="/auth/password/forgot"
        textLink="Забыли пароль?"
      />
      <Link to="/auth/register">
        <Typography className={classes.link} color="inherit">Создать аккаунт</Typography>
      </Link>
    </Form>
  </div>

LoginForm.propTypes = {
  classes: object.isRequired,
  auth: object.isRequired,
  submitCount: number.isRequired,
}

export default withStyles(styles)(
  withRouter(
    connector(
      formik(
        LoginForm
      )
    )
  )
)
