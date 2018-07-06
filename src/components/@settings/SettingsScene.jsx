import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Container from '../Container'
import SettingsMenu from './SettingsMenu'
import ProfileCard from './ProfileCard'
import PasswordCard from './PasswordCard'
import connector from './connector'

const styles = {
  root: {
    display: 'flex',
  },
}

const SettingsScene = ({ classes, auth }) =>
  <Container className={classes.root}>
    <SettingsMenu />
    <ProfileCard user={auth.user} />
    <PasswordCard user={auth.user} />
  </Container>

SettingsScene.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

export default withStyles(styles)(connector(SettingsScene))
