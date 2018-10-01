import React from 'react'
import { func, object } from 'prop-types'
import { Button, withStyles } from '@material-ui/core'
import Helper from '../Helper'

import formik from './formik'
import { Field } from 'formik'
import FormikPhone from '../formik/FormikPhone'

import connector from '../../../connector'

const styles = theme => ({
  root: {
    paddingTop: 25,
    paddingRight: 15,
    paddingLeft: 15,
  },
  input: {
    marginBottom: theme.spacing.size3,
  },
  button: {
    marginTop: theme.spacing.size3,
  },
})

class PhoneScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.header.setIcon('back')
    actions.header.setTitle('Телефон')
    document.title = 'Изменить номер телефона'
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
            label="Номер телефона"
            name="phone"
            component={FormikPhone}
          />
        </div>
        <Helper>Ваш номер телефона будет виден всем людям на вашей вечеринке</Helper>
        <Button variant="raised" color="primary" className={classes.button} type="submit">
          Сохранить
        </Button>
      </form>
    )
  }
}

PhoneScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  handleSubmit: func.isRequired,
}

export default formik(connector(withStyles(styles)(PhoneScene)))
