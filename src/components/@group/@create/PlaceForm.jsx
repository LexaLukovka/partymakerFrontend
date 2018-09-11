/* eslint-disable react/jsx-curly-spacing */
import React from 'react'
import { object } from 'prop-types'
import { withRouter } from 'react-router'
import { FormControlLabel, Radio, RadioGroup, Typography, withStyles } from '@material-ui/core'
import FormikAddress from './formik/FormikAddress'
import { Field } from 'formik'

const styles = () => ({
  radio: {
    display: 'flex',
    flexDirection: 'column',
  },
})

class PlaceForm extends React.Component {
  state = {
    value: 'place',
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  handleClickOpen = () => {
    const { actions, history } = this.props

    //сделать появление кнопки (выбрать) в /places и дальше работа с местом

    history.push('/places')
  }

  render() {
    const { classes } = this.props
    const { value } = this.state
    return (
      <div>
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
      </div>
    )
  }
}

PlaceForm.propTypes = {
  classes: object.isRequired,
  history: object.isRequired,
}

export default withStyles(styles)(withRouter(PlaceForm))
