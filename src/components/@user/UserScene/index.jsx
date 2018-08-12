import React, { Component } from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import connector from './connector'

const styles = () => ({
  root: {},
})

class UserScene extends Component {
  componentDidMount() {
    const { actions } = this.props
    actions.header.title('Мои профиль')
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.resetTitle()
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        User profile
      </div>
    )
  }
}

UserScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(UserScene))
