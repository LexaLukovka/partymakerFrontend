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
  button: {
    marginTop: theme.spacing.size3,
  },
})

class InstagramScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.header.setIcon('back')
    actions.header.setTitle('Instagram')
    document.title = 'Изменить instagram'
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
            label="Instagram"
            component={FormikInstTelega}
            name="instagram"
            placeholder="example"
          />
        </div>
        <Button variant="raised" color="primary" className={classes.button} type="submit">
          Сохранить
        </Button>
      </form>
    )
  }
}

InstagramScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  handleSubmit: func.isRequired,
}

export default formik(connector(withStyles(styles)(InstagramScene)))
