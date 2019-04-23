import React from 'react'
import { Form, Field } from 'formik'
import { object } from 'prop-types'
import { Button, Typography, withStyles } from '@material-ui/core'
import FormikMessageField from './controls/formik/MessageField'
import formik from './formik'

const styles = {
  root: {

    borderTop: 'solid 1px rgba(0, 0, 0, 0.12)'
  },
  send: {
    display: 'flex',
  },
  sendField: {
    flexGrow: 1,
  },
  actions: {
    borderTop: 'solid 1px rgba(0, 0, 0, 0.12)',
    display: 'flex',
    alignItems: 'center',
    padding: 10,
  },
  action: {
    margin: '0 5px'
  },
}

const ChatForm = ({ classes }) =>
  <Form className={classes.root}>
    <div className={classes.send}>
      <Field name="message" className={classes.sendField} component={FormikMessageField} />
      <Button type="submit" color="primary">Отправить</Button>
    </div>
    <div className={classes.actions}>
      <Typography color="textSecondary" variant="subtitle1" gutterBottom>Предложить:</Typography>
      <Button className={classes.action} color="primary">МЕСТО</Button>
      <Button className={classes.action} color="primary">ГОСТЯ</Button>
      <Button className={classes.action} color="primary">ДАТУ И ВРЕМЯ</Button>
    </div>
  </Form>

ChatForm.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(formik(ChatForm))
