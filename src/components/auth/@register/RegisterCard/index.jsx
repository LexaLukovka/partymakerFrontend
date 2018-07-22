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
import Grid from '@material-ui/core/es/Grid/Grid'

const styles = theme => ({
  root: {
    width: '90%',
    marginTop: 20,
  },
  party: {
    marginTop: 20,
    color: 'white',
    textShadow: '5px 10px 10px #2A2929',
  },
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
      <Grid container justify="center">
        <Typography variant="display2" className={classes.party}>Partymaker</Typography>
        <Card className={classes.root}>
          <form onSubmit={this.handleSubmit}>
            <Typography variant="subheading" align="center" className={classes.title}>РЕГИСТРАЦИЯ</Typography>
            <CardContent className={classes.inputGroup}>
              <div className={classes.input}>
                <Typography variant="subheading">Имя и фамилия</Typography>
                <TextField
                  fullWidth
                  error={this.hasError('name')}
                  helperText={this.showHelperError('name')}
                  type="text"
                  name="name"
                  placeholder="Имя и фамилия"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className={classes.input}>
                <Typography variant="subheading">Email</Typography>
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
              <div className={classes.input}>
                <Typography variant="subheading">Номер телефона</Typography>
                <TextField
                  fullWidth
                  name="phone"
                  error={this.hasError('phone')}
                  helperText={this.showHelperError('phone')}
                  type="tel"
                  placeholder="Номер телефона"
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
                  error={this.hasError('password')}
                  helperText={this.showHelperError('password')}
                  type={this.state.showPassword ? 'text' : 'password'}
                  placeholder="Пароль"
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
                <Typography variant="subheading">Повторите пароль</Typography>
                <TextField
                  fullWidth
                  name="repeatPassword"
                  error={this.hasError('repeatPassword')}
                  helperText={this.showHelperError('repeatPassword')}
                  type={this.state.showRepeatPassword ? 'text' : 'password'}
                  placeholder="Повторите пароль"
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
                <Typography color="inherit"> Есть аккаунт? </Typography>
              </Link>
            </div>
          </form>
        </Card>
      </Grid>
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
