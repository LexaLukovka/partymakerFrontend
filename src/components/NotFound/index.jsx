import React, { Component } from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography/Typography'

const styles = {
  root: {
    paddingTop: 20,
  },
}

class NotFound extends Component {
  state = {
    isVisible: false,
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.setState({ isVisible: true }), 300)
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  render() {
    const { classes } = this.props
    return this.state.isVisible ?
      <Typography className={classes.root} align="center" variant="display1"> Not found</Typography>
      :
      null
  }
}

NotFound.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(NotFound)
