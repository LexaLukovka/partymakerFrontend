import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SettingsCard from './SettingsCard'
import connector from './connector'

const styles = {
  root: {
    paddingTop: 15,
    padding: 10,
  },
}

class SettingsScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.header.setIcon('back')
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.setIcon('menu')
  }

  render() {
    const { classes, auth } = this.props
    return (
      <div className={classes.root}>
        <SettingsCard user={auth.user} />
      </div>

    )
  }
}


SettingsScene.propTypes = {
  classes: object.isRequired,
  auth: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(SettingsScene))
