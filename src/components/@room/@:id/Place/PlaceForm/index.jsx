/* eslint-disable react/no-unused-prop-types */
import React from 'react'
import { Form, Field } from 'formik'
import { object, func, bool } from 'prop-types'
import { Button, Typography, withStyles } from '@material-ui/core'
import placeShape from 'shapes/place'
import TextField from 'components/formik/TextField'
import AddressField from 'components/formik/AddressField'
import ServerMessage from 'components/formik/ServerMessage'
import CloseButton from './CloseButton'
import formik from './formik'

const styles = {
  root: {
    display: 'flex'
  },
  title: {
    display: 'flex',
    alignItems: 'center'
  },
  form: {
    maxWidth: 400,
    padding: 20,
  },

  actions: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  message: {
    padding: 9,
  },

}

const PlaceForm = ({ classes, place, onCancel, isSubmitting }) =>
  <Form className={classes.root}>
    <div className={classes.form}>
      <div className={classes.title}>
        <CloseButton onClick={onCancel} />
        <Typography variant="h5">Выбрать место</Typography>
      </div>
      <Field
        label="Название места"
        name="title"
        className={classes.headlineField}
        margin="normal"
        component={TextField}
      />
      <Field
        label="Адрес"
        name="address"
        margin="normal"
        component={AddressField}
      />
      <ServerMessage className={classes.message} color="primary" name="message" />
      <Button
        disabled={isSubmitting}
        type="submit"
        variant="contained"
        color="primary"
      >
        {place ? 'ОБНОВИТЬ' : 'ГОТОВО'}
      </Button>
    </div>
  </Form>

PlaceForm.propTypes = {
  classes: object.isRequired,
  place: placeShape.isRequired,
  isSubmitting: bool.isRequired,
  onSubmit: func.isRequired,
  onCancel: func.isRequired,
}

export default withStyles(styles)(formik(PlaceForm))
