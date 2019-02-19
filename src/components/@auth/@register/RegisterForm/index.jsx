import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import { Button, CardActions, CardContent, Typography, withStyles } from '@material-ui/core'
import { Field, Form } from 'formik'
import FormikText from '../../formik/FormikText'
import formik from './formik'
import connector from '../../connector'

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
      <CardActions className="flexAround">
        <Button variant="contained" type="submit" color="primary">
          Дальше
        </Button>
        <Link to="/auth/login">
          <Typography color="inherit">Уже есть аккаунт?</Typography>
        </Link>
      </CardActions>
    </Form>
  </div>

RegisterForm.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(connector(formik(RegisterForm)))
