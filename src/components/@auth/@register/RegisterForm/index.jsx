/* eslint-disable react/sort-comp,no-console */
import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles/index'
import TextField from '@material-ui/core/es/TextField/TextField'
import CardActions from '@material-ui/core/es/CardActions/CardActions'
import CardContent from '@material-ui/core/es/CardContent/CardContent'
import Button from '@material-ui/core/es/Button/Button'
import Link from 'react-router-dom/es/Link'
import Typography from '@material-ui/core/es/Typography/Typography'
import InputAdornment from '@material-ui/core/es/InputAdornment/InputAdornment'
import IconButton from '@material-ui/core/es/IconButton/IconButton'
import VisibilityOff from '@material-ui/icons/es/VisibilityOff'
import Visibility from '@material-ui/icons/es/Visibility'
import formik from './formik'
import connector from '../../connector'
import Errors from '../Errors'

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
    margin: '0.6rem',
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
  handleClickShowReapedPassword = () => {
    this.setState({ showRepeatPassword: !this.state.showRepeatPassword })
  }

  constructor(props) {
    super(props)

    this.state = {
      isSubmited: false,
      showPassword: false,
      showRepeatPassword: false,
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.auth.user) {
      this.props.history.push('/')
    }
  }

  render() {
    const { classes, values, errors, handleChange, handleBlur, isSubmitting } = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <Typography variant="subheading" align="center" className={classes.title}>РЕГИСТРАЦИЯ</Typography>
        <CardContent className={classes.inputGroup}>
          <div className={classes.input}>
            <TextField
              fullWidth
              label="Имя и фамилия"
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
            <TextField
              fullWidth
              label="Email"
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
            <TextField
              fullWidth
              name="phone"
              label="Номер телефона"
              error={this.hasError('phone')}
              helperText={this.showHelperError('phone')}
              type="tel"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className={classes.input}>
            <TextField
              fullWidth
              name="password"
              label="Пароль"
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
          <div className={classes.input}>
            <TextField
              fullWidth
              name="repeatPassword"
              label="Повторите пароль"
              error={this.hasError('repeatPassword')}
              helperText={this.showHelperError('repeatPassword')}
              type={this.state.showRepeatPassword ? 'text' : 'password'}
              autoComplete="current-password"
              value={values.repeatPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowReapedPassword}
                      onMouseDown={this.handleMouseDownPassword}
                    >
                      {this.state.showRepeatPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          {
            !errors.repeatPassword && values.password !== values.repeatPassword &&
            <Errors> Пароли не совпадают </Errors>
          }
        </CardContent>
        <CardActions>
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
