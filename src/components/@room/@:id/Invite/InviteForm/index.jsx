/* eslint-disable react/no-unused-prop-types */
import React from 'react'
import { Form, Field } from 'formik'
import { object, func, bool } from 'prop-types'
import { Button, Typography, withStyles } from '@material-ui/core'
import roomShape from 'shapes/room'
import TextField from 'components/formik/TextField'
import AddressField from 'components/formik/AddressField'
import ServerMessage from 'components/formik/ServerMessage'
import BackgroundField from './formik/BackgroundField'
import CloseButton from './CloseButton'
import CopyLinkCard from './CopyLinkCard'
import Preview from './formik/Preview'
import formik from './formik'

const styles = {
  root: {
    display: 'flex'
  },

  headline: {
    display: 'flex',
  },
  headlineField: {
    flexGrow: 1,
  },
  preposition: {
    width: 35,
  },
  title: {
    display: 'flex',
    alignItems: 'center'
  },
  form: {
    maxWidth: 400,
    padding: 20,
  },
  preview: {
    minWidth: 600,
    padding: 20,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  actions: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  message: {
    padding: 9,
  }
}

const InviteForm = ({ classes, room, onCancel, isSubmitting }) =>
  <Form className={classes.root}>
    <div className={classes.form}>
      <div className={classes.title}>
        <CloseButton onClick={onCancel} />
        <Typography variant="h5">Приглашение</Typography>
      </div>
      <div className={classes.headline}>
        <Field
          label="Заголовок приглашения"
          name="headline"
          className={classes.headlineField}
          margin="normal"
          component={TextField}
        />
        <Field
          label={' '}
          name="preposition"
          className={classes.preposition}
          margin="normal"
          component={TextField}
        />
      </div>
      <Field
        label="Название события"
        name="title"
        margin="normal"
        component={TextField}
      />
      <Field
        label="Адрес"
        name="address"
        margin="normal"
        component={AddressField}
      />
      <Field
        label="Дата и время"
        name="datetime"
        margin="normal"
        type="datetime-local"
        component={TextField}
      />
      <Field
        label="Изменить фон"
        name="background_url"
        margin="normal"
        background_urls={['/images/sparks.png', '/images/summer.jpg']}
        component={BackgroundField}
      />
    </div>
    <div className={classes.preview}>
      <Preview />
      {room.invite?.token && <CopyLinkCard token={room.invite.token} />}
      <div className={classes.actions}>
        <ServerMessage className={classes.message} color="primary" name="message" />
        <Button
          disabled={isSubmitting}
          type="submit"
          variant="contained"
          color="primary"
        >
          {room.invite ? 'ОБНОВИТЬ' : 'ГОТОВО'}
        </Button>
      </div>
    </div>
  </Form>

InviteForm.propTypes = {
  classes: object.isRequired,
  room: roomShape.isRequired,
  isSubmitting: bool.isRequired,
  onSubmit: func.isRequired,
  onCancel: func.isRequired,
}

export default withStyles(styles)(formik(InviteForm))
