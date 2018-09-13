/* eslint-disable react/jsx-curly-spacing */
import React from 'react'
import { object } from 'prop-types'
import { withRouter } from 'react-router'
import { FormControlLabel, Radio, RadioGroup, Typography, withStyles } from '@material-ui/core'

import FormikAddress from './formik/FormikAddress'
import PlaceInput from './PlaceInput'

import isEmpty from 'lodash/isEmpty'
import { Field } from 'formik'
import connector from './connector'

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
    actions.party.resetPlace()
  }

  handleClickOpen = () => {
    const { actions, history } = this.props
    actions.button.hideCreateGroup()
    history.push('/places')
  }

  render() {
    const { classes, group } = this.props
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
                <Field
                  component={FormikAddress}
                  name="address"
                  type="name"
                  placeholder="Адрес"
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
}

export default withStyles(styles)(withRouter(connector(PlaceForm)))
