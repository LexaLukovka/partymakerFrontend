import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import { Button, CardActions, CardContent, Typography, withStyles } from '@material-ui/core'
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
      <CardActions className="flexAround">
        <Button variant="contained" type="submit" color="primary">
          Дальше
        </Button>
        <Link to="/auth/login">
          <Typography color="inherit">Войти</Typography>
        </Link>
      </CardActions>
      <Link to="/auth/register">
        <Typography className={classes.link} color="inherit">Создать аккаунт</Typography>
      </Link>
    </Form>
  </div>

ForgotForm.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(connector(formik(ForgotForm)))
