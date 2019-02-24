import React from 'react'
import { bool, object } from 'prop-types'
import { Card, CardHeader, withStyles } from '@material-ui/core'
import ForgotForm from './ForgotForm'
import connector from './connector'

const styles = {
  root: {
    width: 350,
    padding: 20,
    border: 'solid',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
  },
  title: {
    paddingBottom: 10,
    textAlign: 'center',
  },
}

class ForgotPasswordScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props

    document.title = 'Восстановление пароля - Partymaker'

    actions.layout.background('/images/forgot.jpg')
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.layout.removeBackground()
  }

  render() {
    const { classes } = this.props

    return (
      <Card className={classes.root}>
        <CardHeader className={classes.title} title="Восстановление пароля" />
        <ForgotForm />
      </Card>
    )
  }
}

ForgotPasswordScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(ForgotPasswordScene))
