import React from 'react'
import { func, object } from 'prop-types'
import { withStyles, Typography, TextField, Button } from '@material-ui/core'
import Helper from '../Helper'
import connector from '../connector'
import formik from './formik'

const styles = theme => ({
  root: {
    paddingTop: 25,
    paddingRight: 10,
    paddingLeft: 10,
  },
  input: {
    marginBottom: theme.spacing.size3,
  },
  button: {
    marginTop: theme.spacing.size3,
  },
})

class PhoneScene extends React.Component {
  componentDidMount() {
    this.props.actions.header.setTitle('Телефон')
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
    const { classes, values, handleSubmit, handleChange, handleBlur } = this.props
    return (
      <form onSubmit={handleSubmit} className={classes.root}>
        <div className={classes.input}>
          <Typography variant="subheading">Номер телефона</Typography>
          <TextField
            fullWidth
            name="phone"
            type="tel"
            placeholder="Телефон"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={this.hasError('phone')}
            helperText={this.showHelperError('phone')}
          />
        </div>
        <Helper>Ваш номер телефона будет виден всем людям на вашей вечеринке</Helper>
        <Button variant="raised" color="primary" className={classes.button} type="submit">
          Сохранить
        </Button>
      </form>
    )
  }
}

PhoneScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  values: object.isRequired,
  errors: object.isRequired,
  touched: object.isRequired,
  handleSubmit: func.isRequired,
  handleChange: func.isRequired,
  handleBlur: func.isRequired,
}

export default formik(connector(withStyles(styles)(PhoneScene)))
