/* eslint-disable react/sort-comp,no-console */
import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { TextField, CardActions, CardContent, Button, Typography, InputAdornment, IconButton } from '@material-ui/core'
import VisibilityOff from 'mdi-react/VisibilityOffIcon'
import Visibility from 'mdi-react/VisibilityIcon'
import formik from './formik'
import connector from '../../connector'

const styles = theme => ({
  title: {
    marginTop: theme.spacing.size3,
  },
  input: {
    marginBottom: theme.spacing.size2,
  },
  inputGroup: {
    marginTop: theme.spacing.size1,
  },
  link: {
    textAlign: 'center',
    margin: '0.1rem',
  },
})

class RegisterForm extends React.Component {
  handleSubmit = (e) => {
    const { handleSubmit } = this.props
    this.setState({ isSubmited: true })

    handleSubmit(e)
  }

  serverError = (fieldName) => {
    const { auth } = this.props
    const serverErrors = {}
    if (auth.errors.length !== 0) {
      if (auth.errors.data !== undefined) {
        auth.errors.data.forEach(error => {
          serverErrors[error.field] = error.message
        })
      } else {
        console.error(auth.errors)
      }
    }
    return serverErrors[fieldName]
  }
  hasError = (fieldName) => {
    const { isSubmited } = this.state
    const { errors, touched } = this.props

    return (!!errors[fieldName] && touched[fieldName] && isSubmited) || !!this.serverError(fieldName)
  }
  showHelperError = (fieldName) => {
    const { errors, touched } = this.props

    return (touched[fieldName] && errors[fieldName]) || this.serverError(fieldName)
  }

  handleMouseDownPassword = event => {
    event.preventDefault()
  }
  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword })
  }

  constructor(props) {
    super(props)

    this.state = {
      isSubmited: false,
      showPassword: false,
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.auth.user) {
      this.props.history.push('/')
    }
  }

  render() {
    const { classes, values, handleChange, handleBlur, isSubmitting } = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <Typography variant="subheading" align="center" className={classes.title}>РЕГИСТРАЦИЯ</Typography>
        <CardContent className={classes.inputGroup}>
          <div className={classes.input}>
            <Typography variant="subheading">Имя и фамилия</Typography>
            <TextField
              fullWidth
              placeholder="Александр Александрович"
              error={this.hasError('name')}
              helperText={this.showHelperError('name')}
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className={classes.input}>
            <Typography variant="subheading">Email</Typography>
            <TextField
              fullWidth
              placeholder="email@example.com"
              error={this.hasError('email')}
              helperText={this.showHelperError('email')}
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className={classes.input}>
            <Typography variant="subheading">Номер телефона</Typography>
            <TextField
              fullWidth
              name="phone"
              placeholder="380990123456"
              error={this.hasError('phone')}
              helperText={this.showHelperError('phone')}
              type="tel"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className={classes.input}>
            <Typography variant="subheading">Пароль</Typography>
            <TextField
              fullWidth
              name="password"
              placeholder="******"
              error={this.hasError('password')}
              helperText={this.showHelperError('password')}
              type={this.state.showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowPassword}
                      onMouseDown={this.handleMouseDownPassword}
                    >
                      {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </CardContent>
        <CardActions disableActionSpacing>
          <Button
            fullWidth
            variant="raised"
            type="submit"
            color="primary"
            disabled={isSubmitting}
          >
            Зарегистрироваться
          </Button>
        </CardActions>
        <div className={classes.link}>
          <Link to="/auth/login">
            <Typography> Уже есть аккаунт? Войти </Typography>
          </Link>
        </div>
      </form>
    )
  }
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  auth: PropTypes.object.isRequired,
}

export default withStyles(styles)(connector(formik(withRouter(RegisterForm))))
