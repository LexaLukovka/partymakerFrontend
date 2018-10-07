/* eslint-disable react/jsx-curly-spacing */
import React from 'react'
import { func, object, shape, string } from 'prop-types'
import { withRouter } from 'react-router'
import { FormControlLabel, Radio, RadioGroup, Typography, withStyles } from '@material-ui/core'
import Geosuggest from 'components/Geosuggest'
import PlaceInput from './PlaceInput'

import isEmpty from 'lodash/isEmpty'
import connector from '../connector'

const styles = theme => ({
  radio: {
    display: 'flex',
    flexDirection: 'column',
  },
  desktop: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  mobile: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
})

class PlaceForm extends React.Component {
  state = {
    value: '',
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  removePlace = (isPlace) => {
    const { actions } = this.props

    if (isPlace) actions.group.resetEvent()
    else actions.group.resetPlace()
  }

  handleClickOpenPlace = () => {
    const { history } = this.props
    history.push('/places')
  }

  handleClickOpenEvent = () => {
    const { actions, history } = this.props
    actions.buttonEvent.hideCreateGroup()
    history.push('/events')
  }

  select = () => {
    const { actions } = this.props
    actions.places.canSelect(true)
  }

  unSelect = () => {
    const { actions } = this.props
    actions.places.canSelect(false)
  }

  render() {
    const { classes, group, values, setFieldValue, setFieldTouched, errors, touched } = this.props
    const { value } = this.state
    const { place, event } = group.form

    return (
      <div>
        {isEmpty(place) && isEmpty(event) ?
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={value}
            onChange={this.handleChange}
          >
            <div className={classes.mobile}>
              <FormControlLabel
                onClick={this.handleClickOpenPlace}
                value="place"
                control={<Radio color="primary" />}
                label={<Typography color="primary" variant="subheading">Выберите место</Typography>}
              />
              <FormControlLabel
                onClick={this.handleClickOpenEvent}
                value="event"
                control={<Radio color="primary" />}
                label={<Typography color="primary" variant="subheading">Выберите событие</Typography>}
              />
            </div>
            <div className={classes.desktop}>
              <FormControlLabel
                onClick={this.select}
                value="place_event"
                control={<Radio color="primary" />}
                label={<Typography color="primary" variant="subheading">Выберите место или событие</Typography>}
              />
            </div>
            <FormControlLabel
              value="address"
              control={<Radio color="primary" />}
              onClick={this.unSelect}
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
          <PlaceInput
            place={isEmpty(place) ? event : place}
            onCancel={() => this.removePlace(isEmpty(place))}
          />
        }
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
