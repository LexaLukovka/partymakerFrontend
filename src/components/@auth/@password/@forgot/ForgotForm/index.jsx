import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import { CardContent, Typography, withStyles } from '@material-ui/core'
import AuthCardActions from 'src/components/@auth/Card/AuthCardActions'
import FormikText from 'components/@auth/formik/FormikText'
import { Field, Form } from 'formik'
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

const ForgotForm = ({ classes }) =>
  <div className={classes.root}>
    <Form>
      <CardContent>
        <Field
          name="email"
          label="Email"
          placeholder="email@example.com"
          component={FormikText}
        />
      </CardContent>
      <AuthCardActions
        textButton="Дальше"
        linkTo="/auth/login"
        textLink="Войти"
      />
      <Link to="/auth/register">
        <Typography className={classes.link} color="inherit">Создать аккаунт</Typography>
      </Link>
    </Form>
  </div>

ForgotForm.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(connector(formik(ForgotForm)))
