import React from 'react'
import { object } from 'prop-types'
import DesctopScene from 'components/@settings/SettingsScene/DesctopScene'
import MobileScene from 'components/@settings/SettingsScene/MobileScene'
import connector from '../connector'
import { withStyles } from '@material-ui/core'

const styles = theme => ({
  desktop: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  mobile: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
})

class SettingsScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props

    actions.header.setTitle('Настройки')
    document.title = 'Настройки'
  }

  componentWillUnmount() {
    this.props.actions.header.resetTitle()
  }

  handleUpload = async url => {
    const { actions, match } = this.props
    await actions.settings.change({ avatar_url: url })
    actions.user.find(match.params.id)
  }


  render() {
    const { classes, user } = this.props
    return (
      <React.Fragment>
        <div className={classes.desktop}>
          <DesctopScene user={user} onChangeAvatar={this.handleUpload} />
        </div>
        <div className={classes.mobile}>
          <MobileScene user={user} />
        </div>
      </React.Fragment>
    )
  }
}

SettingsScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  user: object.isRequired,
}

export default withStyles(styles)(connector(SettingsScene))
