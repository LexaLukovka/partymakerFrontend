import React from 'react'
import { Link } from 'react-router-dom'
import { Button, CardActions, CardContent, Typography, withStyles } from '@material-ui/core'
import { Field, Form } from 'formik'
import FormikText from '../../formik/FormikText'
import formik from './formik'
import connector from '../../connector'
import { object } from 'prop-types'

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
      <CardActions className="flexAround">
        <Button variant="contained" type="submit" color="primary">
          Войти
        </Button>
        <Link to="/">
          <Typography color="inherit">Забыли пароль?</Typography>
        </Link>
      </CardActions>
      <Link to="/auth/register">
        <Typography className={classes.link} color="inherit">Создать аккаунт</Typography>
      </Link>
    </Form>
  </div>

LoginForm.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(connector(formik(LoginForm)))
