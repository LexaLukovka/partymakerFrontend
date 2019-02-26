import React from 'react'
import { object } from 'prop-types'
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

const LoginForm = ({ classes }) =>
  <div className={classes.root}>
    <Form>
      <CardContent>
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
