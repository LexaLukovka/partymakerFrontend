import React from 'react'
import { func, object } from 'prop-types'
import { Button, withStyles } from '@material-ui/core'

import FormikInstTelega from '../formik/FormikInstTelega'
import formik from './formik'
import { Field } from 'formik'

import connector from '../connector'

const styles = theme => ({
  root: {
    paddingTop: 25,
    paddingRight: 15,
    paddingLeft: 15,
  },
  input: {
    marginBottom: theme.spacing.size3,
  },
})

class TelegramScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.header.setIcon('back')
    actions.header.setTitle('Telegram')
    document.title = 'Изменить telegram'
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.setIcon('menu')
    actions.header.resetTitle()
  }

  render() {
    const { classes, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit} className={classes.root}>
        <div className={classes.input}>
          <Field
            label="Telegram"
            component={FormikInstTelega}
            name="telegram"
            placeholder="example"
          />
        </div>
        <Button variant="raised" color="primary" type="submit">
          Сохранить
        </Button>
      </form>
    )
  }
}

TelegramScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  handleSubmit: func.isRequired,
}

export default formik(connector(withStyles(styles)(TelegramScene)))
