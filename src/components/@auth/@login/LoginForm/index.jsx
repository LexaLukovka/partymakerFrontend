/* eslint-disable react/sort-comp,padded-blocks,no-console */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { withRouter, Link } from 'react-router-dom'
import {
  Grid,
  TextField,
  CardActions,
  CardContent,
  Button,
  Typography,
  InputAdornment,
  IconButton,
} from '@material-ui/core'
import VisibilityOff from 'mdi-react/VisibilityOffIcon'
import Visibility from 'mdi-react/VisibilityIcon'
import formik from './formik'
import connector from '../../connector'

const styles = theme => ({
  input: {
    marginBottom: theme.spacing.size2,
  },
  inputGroup: {
    marginTop: theme.spacing.size1,
  },
  link: {
    textAlign: 'center',
    margin: '0.3rem',
  },
})

class LoginForm extends React.Component {

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

  render() {
    const { classes, values, handleChange, handleBlur, isSubmitting } = this.props

    return (
      <form onSubmit={this.handleSubmit}>
        <CardContent className={classes.inputGroup}>
          <div className={classes.input}>
            <Typography variant="subheading">Email</Typography>
            <TextField
              fullWidth
              error={this.hasError('email')}
              helperText={this.showHelperError('email')}
              type="email"
              name="email"
              placeholder="email@example.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div style={{ display: 'flex' }}>
            <Grid container justify="flex-start">
              <Typography variant="subheading">Пароль</Typography>
            </Grid>
            <Grid container justify="flex-end">
              <Link to="/auth/register">
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
              placeholder="*******"
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
          <Link to="/auth/register">
            <Typography color="inherit"> Нет аккаунта? </Typography>
          </Link>
        </div>
      </form>
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

export default withStyles(styles)(connector(formik(withRouter(LoginForm))))
