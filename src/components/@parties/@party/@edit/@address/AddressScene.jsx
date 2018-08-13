import React from 'react'
import { func, object } from 'prop-types'
import { withStyles, Typography, Button } from '@material-ui/core'
import Geosuggest from 'components/Geosuggest'
import formik from './formik'
import connector from '../connector'

const styles = theme => ({
  root: {
    paddingTop: 25,
    paddingRight: 10,
    paddingLeft: 10,
  },
  input: {
    marginBottom: theme.spacing.size3,
  },
})

class AddressScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.header.back()
    actions.header.title('Адрес')
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.menu()
    actions.header.resetTitle()
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
    const { classes, values, party, handleSubmit, setFieldValue, setFieldTouched } = this.props
    return (
      <form onSubmit={handleSubmit} className={classes.root}>
        <div className={classes.input}>
          <Typography variant="subheading">Ваш адрес</Typography>
          <Typography>{party ? party.address.address : ''}</Typography>
          <Typography variant="subheading">Изменить</Typography>
          <Geosuggest
            fullWidth
            name="address"
            placeholder="Адрес"
            value={values.address}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            error={this.hasError('address')}
            helperText={this.showHelperError('address')}
          />
        </div>
        <Button variant="raised" color="primary" type="submit">
          Сохранить
        </Button>
      </form>
    )
  }
}

AddressScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  values: object.isRequired,
  party: object.isRequired,
  errors: object.isRequired,
  touched: object.isRequired,
  handleSubmit: func.isRequired,
  setFieldValue: func.isRequired,
  setFieldTouched: func.isRequired,
}

export default formik(connector(withStyles(styles)(AddressScene)))
