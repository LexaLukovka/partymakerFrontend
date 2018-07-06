/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/es/Card/Card'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import CardContent from '@material-ui/core/es/CardContent/CardContent'
import CardActions from '@material-ui/core/es/CardActions/CardActions'
import Button from '@material-ui/core/es/Button/Button'
import AdditionalFormItems from './FormBadges'
import FormItems from './FormItems'
import formik from './formik'
import connector from './connector'

const style = theme => ({
  root: {
    margin: theme.spacing.size4,
  },
})

class CargoForm extends React.Component {
  state = {
    isSubmited: false,
  }

  componentDidUpdate() {
    if (this.props.success) {
      this.props.history.push('/cargo')
    }
  }

  handleSubmit = (e) => {
    const { handleSubmit } = this.props
    this.setState({ isSubmited: true })

    handleSubmit(e)
  }

  hasError = (fieldName) => {
    const { isSubmited } = this.state
    const { errors, touched } = this.props

    return (!!errors[fieldName] && touched[fieldName] && isSubmited)
  }

  showHelperError = (fieldName) => {
    const { errors, touched } = this.props

    return (touched[fieldName] && errors[fieldName])
  }

  render() {
    const { classes, ...form } = this.props
    return (
      <Card className={classes.root}>
        <form onSubmit={this.handleSubmit}>
          <CardContent>
            <FormItems
              form={form}
              hasError={this.hasError}
              showHelperError={this.showHelperError}
            />
            <AdditionalFormItems />
          </CardContent>
          <CardActions>
            <Button
              fullWidth
              type="submit"
              variant="raised"
              size="large"
              color="primary"
              disabled={form.isSubmitting}
            >
              Добавить груз
            </Button>
          </CardActions>
        </form>
      </Card>
    )
  }
}

CargoForm.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  success: PropTypes.bool.isRequired,
}

export default withStyles(style)(connector(withRouter(formik(CargoForm))))
