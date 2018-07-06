import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/es/Card/Card'
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
import registerFormik from './registerFormik'
import connector from '../../connector'
import Errors from '../Errors'

const styles = theme => ({
  root: {
    width: 400,
  },
  input: {
    marginBottom: theme.spacing.size4,
  },
  inputGroup: {
    marginTop: theme.spacing.size3,
  },
  link: {
    textAlign: 'center',
    margin: '1rem',
  },
})

class RegisterCard extends React.Component {
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
      this.props.history.push('/cargo')
    }
  }

  handleSubmit = (e) => {
    const { handleSubmit } = this.props
    this.setState({ isSubmited: true })

    handleSubmit(e)
  }

  serverError = (fieldName) => {
    const { auth } = this.props
    const serverErrors = {}
    if (auth.errors.length !== 0) {
      console.log(auth.errors)
      if (auth.errors.data !== undefined) {
        auth.errors.data.forEach(error => {
          serverErrors[error.field] = error.message
        })
      } else {
        console.log(auth.errors)
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

  render() {
    const { classes, values, errors, handleChange, handleBlur, isSubmitting } = this.props
    return (
      <Card className={classes.root}>
        <form onSubmit={this.handleSubmit}>
          <CardContent className={classes.inputGroup}>
            <div className={classes.input}>
              <Typography variant="subheading">Введите ваше имя и фамилию:</Typography>
              <TextField
                fullWidth
                error={this.hasError('name')}
                helperText={this.showHelperError('name')}
                type="text"
                name="name"
                label="Имя и фамилия"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className={classes.input}>
              <Typography variant="subheading">Введите email:</Typography>
              <TextField
                fullWidth
                error={this.hasError('email')}
                helperText={this.showHelperError('email')}
                type="email"
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className={classes.input}>
              <Typography variant="subheading">Введите ваш номер телефона:</Typography>
              <TextField
                fullWidth
                name="phone"
                error={this.hasError('phone')}
                helperText={this.showHelperError('phone')}
                type="tel"
                label="Номер телефона"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className={classes.input}>
              <Typography variant="subheading">Придумайте пароль:</Typography>
              <TextField
                fullWidth
                name="password"
                error={this.hasError('password')}
                helperText={this.showHelperError('password')}
                type={this.state.showPassword ? 'text' : 'password'}
                label="Пароль"
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
              <Typography variant="subheading">Повторите пароль:</Typography>
              <TextField
                fullWidth
                name="repeatPassword"
                error={this.hasError('repeatPassword')}
                helperText={this.showHelperError('repeatPassword')}
                type={this.state.showRepeatPassword ? 'text' : 'password'}
                label="Пароль"
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
            {!errors.repeatPassword && values.password !== values.repeatPassword &&
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
            <Link to="/login">
              <Typography variant="caption" color="inherit"> Есть аккаунт? </Typography>
            </Link>
          </div>
        </form>
      </Card>
    )
  }
}

RegisterCard.propTypes = {
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

export default withStyles(styles)(connector(registerFormik(withRouter(RegisterCard))))
