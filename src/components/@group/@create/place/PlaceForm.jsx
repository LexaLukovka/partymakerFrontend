/* eslint-disable react/jsx-curly-spacing */
import React from 'react'
import { func, object, shape, string } from 'prop-types'
import { withRouter } from 'react-router'
import { FormControlLabel, Radio, RadioGroup, Typography, withStyles } from '@material-ui/core'
import PlaceInput from './PlaceInput'

import isEmpty from 'lodash/isEmpty'
import connector from '../connector'
import Geosuggest from 'components/Geosuggest'

const styles = () => ({
  radio: {
    display: 'flex',
    flexDirection: 'column',
  },
})

class PlaceForm extends React.Component {
  state = {
    value: '',
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  removePlace = () => {
    const { actions } = this.props
    actions.group.resetPlace()
  }

  handleClickOpen = () => {
    const { actions, history } = this.props
    actions.button.hideCreateGroup()
    history.push('/places')
  }

  render() {
    const { classes, group, values, setFieldValue, setFieldTouched, errors, touched } = this.props
    const { value } = this.state
    const { place } = group.form
    return (
      <div>
        {isEmpty(place) ?
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={value}
            onChange={this.handleChange}
          >
            <FormControlLabel
              onClick={this.handleClickOpen}
              value="place"
              control={<Radio color="primary" />}
              label={<Typography color="primary" variant="subheading">Выберите место или событие</Typography>}
            />
            <FormControlLabel
              value="address"
              control={<Radio color="primary" />}
              label={
                <Geosuggest
                  fullWidth
                  name="address"
                  placeholder="Адрес"
                  value={values.address}
                  onChange={setFieldValue}
                  onBlur={setFieldTouched}
                  error={!!errors.address && touched.address}
                  helperText={errors.address}
                  disabled={value !== 'address'}
                />}
            />
          </RadioGroup>
          :
          <PlaceInput place={place} onCancel={this.removePlace} />}
      </div>
    )
  }
}

PlaceForm.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  history: object.isRequired,
  group: object.isRequired,
  values: shape({
    address: object,
  }).isRequired,
  setFieldValue: func.isRequired,
  setFieldTouched: func.isRequired,
  errors: shape({
    address: string,
  }).isRequired,
  touched: object.isRequired,
}

export default withStyles(styles)(withRouter(connector(PlaceForm)))
