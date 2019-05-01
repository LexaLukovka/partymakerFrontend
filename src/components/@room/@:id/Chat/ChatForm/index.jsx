import React from 'react'
import { Form, Field } from 'formik'
import { object } from 'prop-types'
import { Button, Typography, withStyles } from '@material-ui/core'
import FormikMessageField from './controls/FormikMessageField'
import AssetField from './controls/FormikAssetField'
import formik from './formik'

const styles = {
  root: {
    borderTop: 'solid 1px rgba(0, 0, 0, 0.12)'
  },
  send: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 5px'
  },
  sendField: {
    flexGrow: 1,
  },
  actions: {
    borderTop: 'solid 1px rgba(0, 0, 0, 0.12)',
    display: 'flex',
    alignItems: 'center',
    padding: 5,
  },
  action: {
    margin: '0 5px'
  },
  actionLabel: {
    paddingLeft: 5,
    marginTop: 4,
  }
}

const ChatForm = ({ classes }) =>
  <Form className={classes.root}>
    <div className={classes.send}>
      <div>
        <Field name="asset_id" component={AssetField} />
      </div>
      <Field name="text" className={classes.sendField} component={FormikMessageField} />
      <Button type="submit" color="primary">Отправить</Button>
    </div>
    <div className={classes.actions}>
      <Typography
        color="textSecondary"
        className={classes.actionLabel}
        variant="subtitle1"
        gutterBottom
      >
        Предложить:
      </Typography>
      <Button className={classes.action} color="primary">МЕСТО</Button>
      <Button className={classes.action} color="primary">ГОСТЯ</Button>
      <Button className={classes.action} color="primary">ДАТУ И ВРЕМЯ</Button>
    </div>
  </Form>

ChatForm.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(formik(ChatForm))
