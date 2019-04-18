import React, { Component } from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import userShape from 'shapes/user'
import Header from 'components/modules/Header'
import connector from './connector'

const styles = {
  root: {},
}

class HomeScene extends Component {
  render() {
    const { classes, user } = this.props

    return (
      <div className={classes.root}>
        <Header user={user} />
      </div>
    )
  }
}

HomeScene.propTypes = {
  classes: object.isRequired,
  user: userShape,
}

HomeScene.defaultProps = {
  user: null
}

export default withStyles(styles)(connector(HomeScene))
