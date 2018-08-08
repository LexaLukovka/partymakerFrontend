import React from 'react'
import { object } from 'prop-types'
import { withStyles, Button } from '@material-ui/core'
import PasswordForm from './PasswordForm'
import connector from '../connector'

const styles = {
  root: {
    paddingTop: 23,
  },
}

class PasswordScene extends React.Component {
  componentDidMount() {
    this.props.actions.header.setTitle('Пароль')
  }

  componentWillUnmount() {
    this.props.actions.header.resetTitle()
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <PasswordForm />
        <Button variant="raised" color="primary"> Сохранить </Button>
      </div>
    )
  }
}

PasswordScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(PasswordScene))
