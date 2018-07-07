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

const SettingsScene = ({ classes, auth, menuItem }) =>
  <Container>
    <div className={classes.root}>
      <SettingsMenu />
      {menuItem === 0 && <ProfileCard user={auth.user} />}
      {menuItem === 1 && <PasswordCard />}
    </div>
  </Container>

SettingsScene.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  menuItem: PropTypes.number.isRequired,
}

export default withStyles(styles)(connector(SettingsScene))
