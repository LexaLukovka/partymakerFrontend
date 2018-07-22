import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles/index'
import { withRouter } from 'react-router-dom'
import Grid from '@material-ui/core/es/Grid/Grid'
import Link from 'react-router-dom/es/Link'
import Card from '@material-ui/core/es/Card/Card'
import TextField from '@material-ui/core/es/TextField/TextField'
import CardActions from '@material-ui/core/es/CardActions/CardActions'
import CardContent from '@material-ui/core/es/CardContent/CardContent'
import Button from '@material-ui/core/es/Button/Button'
import Typography from '@material-ui/core/es/Typography/Typography'
import InputAdornment from '@material-ui/core/es/InputAdornment/InputAdornment'
import IconButton from '@material-ui/core/es/IconButton/IconButton'
import VisibilityOff from '@material-ui/icons/es/VisibilityOff'
import Visibility from '@material-ui/icons/es/Visibility'
import loginFormik from './loginFormik'
import connector from '../../connector'

const styles = theme => ({
  title: {
    marginTop: theme.spacing.size3,
  },
  input: {
    marginBottom: theme.spacing.size3,
  },
  inputGroup: {
    marginTop: theme.spacing.size1,
  },
  link: {
    textAlign: 'center',
    margin: '0.6rem',
  },
})

class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showPassword: false,
      isSubmited: false,
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.auth.user) {
      this.props.history.push('/')
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

  render() {
    const { classes, values, handleChange, handleBlur, isSubmitting } = this.props

    return (
      <Card className={classes.rootCard}>
        <Typography variant="subheading" align="center" className={classes.title}>ВОЙТИ</Typography>
        <form onSubmit={this.handleSubmit}>
          <CardContent className={classes.inputGroup}>
            <div className={classes.input}>
              <Typography variant="subheading">Введите email</Typography>
              <TextField
                fullWidth
                error={this.hasError('email')}
                helperText={this.showHelperError('email')}
                type="email"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div style={{ display: 'flex' }}>
              <Grid container justify="flex-start">
                <Typography variant="subheading">Введите пароль</Typography>
              </Grid>
              <Grid container justify="flex-end">
                <Link to="/register">
                  <Typography variant="body1">Забыли пароль?</Typography>
                </Link>
              </Grid>
            </div>
            <div className={classes.input}>
              <TextField
                fullWidth
                name="password"
                error={this.hasError('password')}
                helperText={this.showHelperError('password')}
                type={this.state.showPassword ? 'text' : 'password'}
                placeholder="Пароль"
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
          <CardActions>
            <Button
              fullWidth
              variant="raised"
              type="submit"
              color="primary"
              disabled={isSubmitting}
            >
              Войти
            </Button>
          </CardActions>
          <div className={classes.link}>
            <Link to="/register">
              <Typography color="inherit"> Нет аккаунта? </Typography>
            </Link>
          </div>
        </form>
      </Card>
    )
  }
}

LoginForm.propTypes = {
  auth: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
}

export default withStyles(styles)(connector(loginFormik(withRouter(LoginForm))))
