import React from 'react'
import { func, object } from 'prop-types'
import { withStyles, Button, Typography, TextField } from '@material-ui/core'
import Errors from './Errors'
import formik from './formik'
import connector from '../connector'

const styles = theme => ({
  root: {
    paddingTop: 25,
    paddingRight: 10,
    paddingLeft: 10,
  },
  input: {
    paddingLeft: 10,
    marginBottom: theme.spacing.size3,
  },
  button: {
    marginTop: theme.spacing.size3,
  },
})

class PasswordScene extends React.Component {
  componentDidMount() {
    this.props.actions.header.setTitle('Пароль')
    this.props.actions.header.setIcon('back')
  }

  componentWillUnmount() {
    this.props.actions.header.resetTitle()
    this.props.actions.header.setIcon('menu')
  }

  hasError = (fieldName) => {
    const { errors, touched } = this.props
    return (!!errors[fieldName] && touched[fieldName])
  }

  showHelperError = (fieldName) => {
    const { errors, touched } = this.props
    return (touched[fieldName] && errors[fieldName])
  }


  render() {
    const { classes, values, errors, handleSubmit, handleChange, handleBlur } = this.props
    return (
      <form onSubmit={handleSubmit} className={classes.root}>
        <div className={classes.input}>
          <Typography variant="subheading">Введите старый пароль</Typography>
          <TextField
            fullWidth
            type="password"
            name="oldPassword"
            placeholder="Старый пароль"
            value={values.oldPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            error={this.hasError('oldPassword')}
            helperText={this.showHelperError('oldPassword')}
          />
        </div>
        <div className={classes.input}>
          <Typography variant="subheading">Введите новый пароль</Typography>
          <TextField
            fullWidth
            type="password"
            name="password"
            placeholder="Новый пароль"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={this.hasError('password')}
            helperText={this.showHelperError('password')}
          />
        </div>
        <div className={classes.input}>
          <Typography variant="subheading">Повторите новый пароль</Typography>
          <TextField
            fullWidth
            type="password"
            name="repeatPassword"
            placeholder="Повторите новый пароль"
            value={values.repeatPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            error={this.hasError('repeatPassword')}
            helperText={this.showHelperError('repeatPassword')}
          />
        </div>
        {
          !errors.repeatPassword && values.password !== values.repeatPassword &&
          <Errors> Пароли не совпадают </Errors>
        }
        <Button variant="raised" color="primary" className={classes.button} type="submit">
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
  touched: object.isRequired,
  handleSubmit: func.isRequired,
  handleChange: func.isRequired,
  handleBlur: func.isRequired,
}

export default connector(formik(withStyles(styles)(PasswordScene)))
