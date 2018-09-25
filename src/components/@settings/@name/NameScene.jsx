import React from 'react'
import { func, object } from 'prop-types'
import { Button, withStyles } from '@material-ui/core'
import Helper from '../Helper'

import formik from './formik'
import FormikText from '../formik/FormikText'
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
  button: {
    marginTop: theme.spacing.size3,
  },
})

class NameScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.header.setIcon('back')
    actions.header.setTitle('Имя и фамилия')
    document.title = 'Изменить имя'
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
            label="Имя и фамилия"
            component={FormikText}
            name="name"
            placeholder="Вася Пупкин"
          />
        </div>
        <Helper>Ваше имя и фамилия будут видны всем пользователям</Helper>
        <Button variant="raised" color="primary" className={classes.button} type="submit">
          Сохранить
        </Button>
      </form>
    )
  }
}

NameScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  handleSubmit: func.isRequired,
}

export default formik(connector(withStyles(styles)(NameScene)))
