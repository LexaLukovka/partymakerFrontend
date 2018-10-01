import React from 'react'
import { func, object } from 'prop-types'
import { Button, withStyles } from '@material-ui/core'
import Errors from './Errors'

import FormikPassword from './formik/FormikPassword'
import formik from './formik/formik'
import { Field } from 'formik'

import connector from '../../../connector'

const styles = () => ({
  root: {
    paddingTop: 25,
    paddingRight: 15,
    paddingLeft: 15,
  },
  button: {
    marginTop: 10,
  },
})

class PasswordScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.header.setIcon('back')
    actions.header.setTitle('Пароль')
    document.title = 'Пароль'
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.setIcon('menu')
    actions.header.resetTitle()
  }

  render() {
    const { classes, values, errors, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit} className={classes.root}>
        <Field
          name="oldPassword"
          label="Старый пароль"
          placeholder="******"
          component={FormikPassword}
        />
        <Field
          name="password"
          label="Новый пароль"
          placeholder="******"
          component={FormikPassword}
        />
        <Field
          name="repeatPassword"
          label="Повторите новый пароль"
          placeholder="******"
          component={FormikPassword}
        />
        {
          !errors.repeatPassword && values.password !== values.repeatPassword &&
          <Errors> Пароли не совпадают </Errors>
        }
        <Button color="primary" className={classes.button} type="submit">
          Сохранить
        </Button>
      </form>
    )
  }
}

PasswordScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  values: object.isRequired,
  errors: object.isRequired,
  handleSubmit: func.isRequired,
}

export default connector(formik(withStyles(styles)(PasswordScene)))
