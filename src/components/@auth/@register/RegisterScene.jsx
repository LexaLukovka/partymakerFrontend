import React from 'react'
import { object } from 'prop-types'
import { Card, CardHeader, withStyles } from '@material-ui/core'
import RegisterForm from './RegisterForm'
import connector from '../connector'

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

class RegisterScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props

    document.title = 'Регистрация - Partymaker'

    actions.layout.background('/images/login.jpg')
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.layout.removeBackground()
  }

  render() {
    const { classes } = this.props

    return (
      <Card className={classes.root}>
        <CardHeader className={classes.title} title="РЕГИСТРАЦИЯ" />
        <RegisterForm />
      </Card>
    )
  }
}

RegisterScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(RegisterScene))
