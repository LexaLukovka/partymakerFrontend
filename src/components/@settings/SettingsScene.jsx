import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/es/Grid/Grid'
import Container from '../Container'
import SettingsMenu from './SettingsMenu'
import ProfileCard from './ProfileCard'
import PasswordCard from './PasswordCard'
import connector from './connector'

const styles = {
  root: {
    display: 'flex',
    marginTop: '5rem',
    '@media only screen and (max-width: 765px)': {
      marginTop: '1rem',
    },
  },
}

const SettingsScene = ({ classes, auth, menuItem }) =>
  <Container className={classes.root}>
    <Grid container justify="center">
      <Grid>
        <SettingsMenu />
      </Grid>
      <Grid>
        {menuItem === 0 && <ProfileCard user={auth.user} />}
        {menuItem === 1 && <PasswordCard />}
      </Grid>
    </Grid>
  </Container>

SettingsScene.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  menuItem: PropTypes.number.isRequired,
}

export default withStyles(styles)(connector(SettingsScene))
