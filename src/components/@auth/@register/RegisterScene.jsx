import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import RegisterForm from './RegisterForm'
import Card from '@material-ui/core/Card/Card'

const styles = () => ({
  root: {
    padding: 5,
  },
})

class RegisterScene extends Component {
  componentWillMount() {
    document.title = 'Регистрация'
  }

  render() {
    const { classes } = this.props
    return (
      <Card className={classes.root}>
        <RegisterForm />
      </Card>
    )
  }
}

RegisterScene.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(RegisterScene)
